import { addStrings, registerLocale } from 'meteor/vulcan:core';

registerLocale({
  id: 'en',
  label: 'English',
  required: true,
});

registerLocale({
  id: 'fr',
  label: 'Français',
  required: false,
});

addStrings('en', {
  'datatable.new': 'New Candidate',
});
