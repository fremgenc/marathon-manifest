import { MAPS } from '../../../maps/maps';
import { FactionType } from '../../factions.interface';
import { ARACHNE_REWARD_75_REP, FactionContract, FactionContractType } from '../contracts.interface';

export const ARACHNE_PRIORITY_CONTRACTS: FactionContract[] = [
  {
    name: 'Contract01 Name',
    factionType: FactionType.Arachne,
    type: FactionContractType.Priority,
    steps: [
      {
        slug: 'contract01-name',
        description: `You want to run with Arachne? Show us you can keep up with our style and hold your own in combat.`,
        rewards: [],
        inSingleRun: false,
        contested: false,
        map: MAPS.perimeter,
        objectives: [
          {
            description: 'Eliminate downed Runners with your finisher',
            quantity: 10,
            reward: ARACHNE_REWARD_75_REP,
          },
        ],
      },
    ],
  },
];
