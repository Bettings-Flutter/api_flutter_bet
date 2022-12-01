import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Odds, OddsDocument } from './schema/odds.schema';
import axios from 'axios';

@Injectable()
export class OddsService {
  constructor(@InjectModel(Odds.name) private oddsModel: Model<OddsDocument>) {}

  async storeOdds() {
    let oddsData = [];
    let fixturesData = [];

    const urlOdds = 'https://v3.football.api-sports.io/odds';
    await axios
      .get(urlOdds, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-rapidapi-key': 'ba1df0094237832b68cec07150b9259f',
          'accept-encoding': 'application/json',
        },
        params: {
          season: 2022,
          bet: 1,
          bookmaker: 6,
          league: 1,
          date: new Date().toISOString().split('T')[0],
        },
      })
      .then((res) => {
        oddsData = res.data.response;
      });

    const urlFixture = 'https://v3.football.api-sports.io/fixtures';
    oddsData.map((a) => {
      axios
        .get(urlFixture, {
          headers: {
            'x-rapidapi-host': 'v3.football.api-sports.io',
            'x-rapidapi-key': 'ba1df0094237832b68cec07150b9259f',
            'accept-encoding': 'application/json',
          },
          params: {
            id: a.fixture.id,
          },
        })
        .then((response) => {
          fixturesData = response.data.response;
          console.log(fixturesData);

          oddsData.map((i) => {
            i.bookmakers.map((e) => {
              e.bets.map((o) => {
                fixturesData.map((j) =>
                  j.fixture.id === i.fixture.id
                    ? new this.oddsModel({
                        matches: {
                          fixture: fixturesData.map((j) =>
                            j.fixture.id === i.fixture.id ? j : null,
                          ),
                          bookmakers: {
                            id: o.id,
                            name: o.name,
                            bets: {
                              id: o.id,
                              name: o.name,
                              values: o.values.map((y) => {
                                return {
                                  value: y.value,
                                  odd: y.odd,
                                };
                              }),
                            },
                          },
                        },
                      }).save()
                    : null,
                );
              });
            });
          });
        })
        .catch((err) => {
          console.log(err);
          throw err;
        });
    });
  }
  async findAll() {
    return this.oddsModel.find();
  }
}
