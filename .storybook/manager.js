import addons from '@storybook/addons';
import { themes } from '@storybook/theming';
import projectTheme from './project-theme';

addons.setConfig({
  showRoots: true,
  theme: projectTheme,
  panelPosition: 'right',
  isToolshown: false,
  selectedPanel: 'component-header--basic'
});
