import _pickBy from 'lodash/pickBy';
import _identity from 'lodash/identity';
export const compactObject = object => _pickBy(object, _identity);

