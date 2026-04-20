import { addons, internal_checklistStore } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';

const cubicleTheme = create({
  base: 'light',
  brandTitle: 'Cubicle',
  brandTarget: '_self',
});

addons.setConfig({
  theme: cubicleTheme,
});

// Mark all guide checklist items as done
const checklistItems = [
  'accessibilityTests',
  'autodocs',
  'ciTests',
  'controls',
  'coverage',
  'guidedTour',
  'installA11y',
  'installChromatic',
  'installDocs',
  'installVitest',
  'mdxDocs',
  'moreComponents',
  'moreStories',
  'onboardingSurvey',
  'organizeStories',
  'publishStorybook',
  'renderComponent',
  'runTests',
  'viewports',
  'visualTests',
  'whatsNewStorybook10',
  'writeInteractions',
];

checklistItems.forEach((id) => {
  internal_checklistStore.done(id);
  internal_checklistStore.accept(id);
});
