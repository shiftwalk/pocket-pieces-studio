import {
  FiHome,
  FiSmile,
  FiInfo,
  FiFileText,
  FiMail,
  FiFilm,
  FiCamera
} from 'react-icons/fi'

export default (S) => 
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home')
        .child(S.document().schemaType('home').documentId('singleton-home')).icon(FiHome),
      S.divider(),
      S.listItem()
        .title('About')
        .child(S.document().schemaType('about').documentId('singleton-about')).icon(FiSmile),
      S.divider(),
      S.listItem()
        .title('Hiring')
        .child(S.document().schemaType('credits').documentId('singleton-credits')).icon(FiFilm),
      S.divider(),
      S.listItem()
        .title('Archives')
        .child(S.documentTypeList('archives').title('Archives')).icon(FiCamera),
      S.divider(),
      S.listItem()
        .title('FAQs')
        .child(S.document().schemaType('info').documentId('singleton-info')).icon(FiInfo),
      S.divider(),
      S.listItem()
        .title('Contact')
        .child(S.document().schemaType('contact').documentId('singleton-contact')).icon(FiMail),
      S.divider(),
      S.listItem()
        .title('Privacy')
        .child(S.document().schemaType('privacy').documentId('singleton-privacy')).icon(FiFileText)
    ]
)