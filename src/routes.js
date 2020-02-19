import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import Main from './pages/Main';
import Travel from './pages/Travel';

const mainNavigation = createAnimatedSwitchNavigator(
  {
    Main: { screen: Main },
    Travel: { screen: Travel, params: { _id: 1 } }
  },
  {
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-top"
          durationMs={100}
          interpolation="easeIn"
        />
        <Transition.In
          type="slide-bottom"
          delayMs={300}
          durationMs={300}
        />
      </Transition.Together>
    )
  },
);

const Routes = createAppContainer(mainNavigation);

export default Routes;
