import {
  FiHome,
  FiSmile,
  FiInfo,
  FiFileText,
  FiMail
} from 'react-icons/fi'

export default (S) => S.list().title('Content').items([
  S.listItem().title('Home').child(S.editor().id('home').schemaType('home').documentId('singleton-home')).icon(FiHome),
  S.divider(),
  S.listItem().title('About').child(S.editor().id('about').schemaType('about').documentId('singleton-about')).icon(FiSmile),
  S.divider(),
  S.listItem().title('Info').child(S.editor().id('info').schemaType('info').documentId('singleton-info')).icon(FiInfo),
  S.divider(),
  S.listItem().title('Privacy').child(S.editor().id('privacy').schemaType('privacy').documentId('singleton-privacy')).icon(FiFileText),
  S.divider(),
  S.listItem().title('Contact').child(S.editor().id('contact').schemaType('contact').documentId('singleton-contact')).icon(FiMail)
  // S.listItem().title('Work').child(S.documentTypeList('work').title('Work')).icon(FiCamera)
])