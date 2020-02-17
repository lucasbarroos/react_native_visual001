import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {Transition} from 'react-native-reanimated';
import Main from './pages/Main';

const mainNavigation = createSwitchNavigator(
  {
    Main: {screen: Main},
  },
  {
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-bottom"
          durationMs={400}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
    ),
  },
);

const Routes = createAppContainer(mainNavigation);

export default Routes;
