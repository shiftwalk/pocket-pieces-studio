import {
  FiHome,
  FiCamera,
} from 'react-icons/fi'

export default (S) => S.list().title('Content').items([
  S.listItem().title('Home').child(S.editor().id('home').schemaType('home').documentId('singleton-home')).icon(FiHome),
  // S.divider(),
  // S.listItem().title('Work').child(S.documentTypeList('work').title('Work')).icon(FiCamera)
])