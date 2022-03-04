import React from "react"
import "./SavedPage.css"

// let savedBooks = [{  
//   "kind": "books#volume",
//   "id": "ymF3zgEACAAJ",
//   "etag": "zhpUYMIBRmw",
//   "selfLink": "https://www.googleapis.com/books/v1/volumes/ymF3zgEACAAJ",
//   "volumeInfo": {
//     "title": "To Catch the Wind",
//     "subtitle": "Book One of the NW Wind Series",
//     "authors": [
//       "Charli West"
//     ],
//     "publishedDate": "2021-06-21",
//     "description": "Love is a journey as treacherous as the Oregon TrailLynn Malen has finally reached her breaking point. Determined to escape an abusive marriage and get out of Independence, Missouri, she disguises herself as a young man and changes her name to \"Larry\" to get the last spot on a wagon train heading west. Accompanied by folks who are also looking for a new future, Lynn finds comfort and friends along the trail. What she didn't expect to find was an attraction to Ben Alenson, the strong, brusque, and determined wagon master.After this wagon train reaches its destination, Ben Alenson is done with the Oregon Trail. Having led two wagon trains across the prairie, he's ready to plant roots in Oregon City and settle for an eligible woman in the town-if he can get his party there alive. The journey is rugged and filled with wild animals, disease, and dangerous terrain. Plus, there's the suspicious \"Larry\", a young man who may not actually be a man at all, and the last thing Ben needs is more trouble along the way.When Ben discovers Lynn's identity and the two form a connection, there's no denying their attraction to one another. But as Lynn's past catches up to her, she and Ben must decide if their love is worth fighting for. Can Lynn overcome her trauma and open up her heart, and is Ben strong enough to win Lynn's trust? The Oregon Trail brings many trials, but love may be the most trying of them all.",
//     "industryIdentifiers": [
//       {
//         "type": "ISBN_10",
//         "identifier": "0578923173"
//       },
//       {
//         "type": "ISBN_13",
//         "identifier": "9780578923178"
//       }
//     ],
//     "readingModes": {
//       "text": false,
//       "image": false
//     },
//     "printType": "BOOK",
//     "maturityRating": "NOT_MATURE",
//     "allowAnonLogging": false,
//     "contentVersion": "preview-1.0.0",
//     "panelizationSummary": {
//       "containsEpubBubbles": false,
//       "containsImageBubbles": false
//     },
//     "imageLinks": {
//       "smallThumbnail": "http://books.google.com/books/content?id=ymF3zgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//       "thumbnail": "http://books.google.com/books/content?id=ymF3zgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
//     },
//     "language": "en",
//     "previewLink": "http://books.google.com/books?id=ymF3zgEACAAJ&dq=the_wind&hl=&cd=1&source=gbs_api",
//     "infoLink": "http://books.google.com/books?id=ymF3zgEACAAJ&dq=the_wind&hl=&source=gbs_api",
//     "canonicalVolumeLink": "https://books.google.com/books/about/To_Catch_the_Wind.html?hl=&id=ymF3zgEACAAJ"
//   },
//   "saleInfo": {
//     "country": "US",
//     "saleability": "NOT_FOR_SALE",
//     "isEbook": false
//   },
//   "accessInfo": {
//     "country": "US",
//     "viewability": "NO_PAGES",
//     "embeddable": false,
//     "publicDomain": false,
//     "textToSpeechPermission": "ALLOWED",
//     "epub": {
//       "isAvailable": false
//     },
//     "pdf": {
//       "isAvailable": false
//     },
//     "webReaderLink": "http://play.google.com/books/reader?id=ymF3zgEACAAJ&hl=&printsec=frontcover&source=gbs_api",
//     "accessViewStatus": "NONE",
//     "quoteSharingAllowed": false
//   },
//   "searchInfo": {
//     "textSnippet": "Determined to escape an abusive marriage and get out of Independence, Missouri, she disguises herself as a young man and changes her name to &quot;Larry&quot; to get the last spot on a wagon train heading west."
//   }
// },
// {  
//   "kind": "books#volume",
//   "id": "ymF3zgEACAAJ",
//   "etag": "zhpUYMIBRmw",
//   "selfLink": "https://www.googleapis.com/books/v1/volumes/ymF3zgEACAAJ",
//   "volumeInfo": {
//     "title": "To Catch the Wind",
//     "subtitle": "Book One of the NW Wind Series",
//     "authors": [
//       "Charli West"
//     ],
//     "publishedDate": "2021-06-21",
//     "description": "Love is a journey as treacherous as the Oregon TrailLynn Malen has finally reached her breaking point. Determined to escape an abusive marriage and get out of Independence, Missouri, she disguises herself as a young man and changes her name to \"Larry\" to get the last spot on a wagon train heading west. Accompanied by folks who are also looking for a new future, Lynn finds comfort and friends along the trail. What she didn't expect to find was an attraction to Ben Alenson, the strong, brusque, and determined wagon master.After this wagon train reaches its destination, Ben Alenson is done with the Oregon Trail. Having led two wagon trains across the prairie, he's ready to plant roots in Oregon City and settle for an eligible woman in the town-if he can get his party there alive. The journey is rugged and filled with wild animals, disease, and dangerous terrain. Plus, there's the suspicious \"Larry\", a young man who may not actually be a man at all, and the last thing Ben needs is more trouble along the way.When Ben discovers Lynn's identity and the two form a connection, there's no denying their attraction to one another. But as Lynn's past catches up to her, she and Ben must decide if their love is worth fighting for. Can Lynn overcome her trauma and open up her heart, and is Ben strong enough to win Lynn's trust? The Oregon Trail brings many trials, but love may be the most trying of them all.",
//     "industryIdentifiers": [
//       {
//         "type": "ISBN_10",
//         "identifier": "0578923173"
//       },
//       {
//         "type": "ISBN_13",
//         "identifier": "9780578923178"
//       }
//     ],
//     "readingModes": {
//       "text": false,
//       "image": false
//     },
//     "printType": "BOOK",
//     "maturityRating": "NOT_MATURE",
//     "allowAnonLogging": false,
//     "contentVersion": "preview-1.0.0",
//     "panelizationSummary": {
//       "containsEpubBubbles": false,
//       "containsImageBubbles": false
//     },
//     "imageLinks": {
//       "smallThumbnail": "http://books.google.com/books/content?id=ymF3zgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//       "thumbnail": "http://books.google.com/books/content?id=ymF3zgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
//     },
//     "language": "en",
//     "previewLink": "http://books.google.com/books?id=ymF3zgEACAAJ&dq=the_wind&hl=&cd=1&source=gbs_api",
//     "infoLink": "http://books.google.com/books?id=ymF3zgEACAAJ&dq=the_wind&hl=&source=gbs_api",
//     "canonicalVolumeLink": "https://books.google.com/books/about/To_Catch_the_Wind.html?hl=&id=ymF3zgEACAAJ"
//   },
//   "saleInfo": {
//     "country": "US",
//     "saleability": "NOT_FOR_SALE",
//     "isEbook": false
//   },
//   "accessInfo": {
//     "country": "US",
//     "viewability": "NO_PAGES",
//     "embeddable": false,
//     "publicDomain": false,
//     "textToSpeechPermission": "ALLOWED",
//     "epub": {
//       "isAvailable": false
//     },
//     "pdf": {
//       "isAvailable": false
//     },
//     "webReaderLink": "http://play.google.com/books/reader?id=ymF3zgEACAAJ&hl=&printsec=frontcover&source=gbs_api",
//     "accessViewStatus": "NONE",
//     "quoteSharingAllowed": false
//   },
//   "searchInfo": {
//     "textSnippet": "Determined to escape an abusive marriage and get out of Independence, Missouri, she disguises herself as a young man and changes her name to &quot;Larry&quot; to get the last spot on a wagon train heading west."
//   }
// },
// {  
//   "kind": "books#volume",
//   "id": "ymF3zgEACAAJ",
//   "etag": "zhpUYMIBRmw",
//   "selfLink": "https://www.googleapis.com/books/v1/volumes/ymF3zgEACAAJ",
//   "volumeInfo": {
//     "title": "To Catch the Wind",
//     "subtitle": "Book One of the NW Wind Series",
//     "authors": [
//       "Charli West"
//     ],
//     "publishedDate": "2021-06-21",
//     "description": "Love is a journey as treacherous as the Oregon TrailLynn Malen has finally reached her breaking point. Determined to escape an abusive marriage and get out of Independence, Missouri, she disguises herself as a young man and changes her name to \"Larry\" to get the last spot on a wagon train heading west. Accompanied by folks who are also looking for a new future, Lynn finds comfort and friends along the trail. What she didn't expect to find was an attraction to Ben Alenson, the strong, brusque, and determined wagon master.After this wagon train reaches its destination, Ben Alenson is done with the Oregon Trail. Having led two wagon trains across the prairie, he's ready to plant roots in Oregon City and settle for an eligible woman in the town-if he can get his party there alive. The journey is rugged and filled with wild animals, disease, and dangerous terrain. Plus, there's the suspicious \"Larry\", a young man who may not actually be a man at all, and the last thing Ben needs is more trouble along the way.When Ben discovers Lynn's identity and the two form a connection, there's no denying their attraction to one another. But as Lynn's past catches up to her, she and Ben must decide if their love is worth fighting for. Can Lynn overcome her trauma and open up her heart, and is Ben strong enough to win Lynn's trust? The Oregon Trail brings many trials, but love may be the most trying of them all.",
//     "industryIdentifiers": [
//       {
//         "type": "ISBN_10",
//         "identifier": "0578923173"
//       },
//       {
//         "type": "ISBN_13",
//         "identifier": "9780578923178"
//       }
//     ],
//     "readingModes": {
//       "text": false,
//       "image": false
//     },
//     "printType": "BOOK",
//     "maturityRating": "NOT_MATURE",
//     "allowAnonLogging": false,
//     "contentVersion": "preview-1.0.0",
//     "panelizationSummary": {
//       "containsEpubBubbles": false,
//       "containsImageBubbles": false
//     },
//     "imageLinks": {
//       "smallThumbnail": "http://books.google.com/books/content?id=ymF3zgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//       "thumbnail": "http://books.google.com/books/content?id=ymF3zgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
//     },
//     "language": "en",
//     "previewLink": "http://books.google.com/books?id=ymF3zgEACAAJ&dq=the_wind&hl=&cd=1&source=gbs_api",
//     "infoLink": "http://books.google.com/books?id=ymF3zgEACAAJ&dq=the_wind&hl=&source=gbs_api",
//     "canonicalVolumeLink": "https://books.google.com/books/about/To_Catch_the_Wind.html?hl=&id=ymF3zgEACAAJ"
//   },
//   "saleInfo": {
//     "country": "US",
//     "saleability": "NOT_FOR_SALE",
//     "isEbook": false
//   },
//   "accessInfo": {
//     "country": "US",
//     "viewability": "NO_PAGES",
//     "embeddable": false,
//     "publicDomain": false,
//     "textToSpeechPermission": "ALLOWED",
//     "epub": {
//       "isAvailable": false
//     },
//     "pdf": {
//       "isAvailable": false
//     },
//     "webReaderLink": "http://play.google.com/books/reader?id=ymF3zgEACAAJ&hl=&printsec=frontcover&source=gbs_api",
//     "accessViewStatus": "NONE",
//     "quoteSharingAllowed": false
//   },
//   "searchInfo": {
//     "textSnippet": "Determined to escape an abusive marriage and get out of Independence, Missouri, she disguises herself as a young man and changes her name to &quot;Larry&quot; to get the last spot on a wagon train heading west."
//   }
// },
// {  
//   "kind": "books#volume",
//   "id": "ymF3zgEACAAJ",
//   "etag": "zhpUYMIBRmw",
//   "selfLink": "https://www.googleapis.com/books/v1/volumes/ymF3zgEACAAJ",
//   "volumeInfo": {
//     "title": "To Catch the Wind",
//     "subtitle": "Book One of the NW Wind Series",
//     "authors": [
//       "Charli West"
//     ],
//     "publishedDate": "2021-06-21",
//     "description": "Love is a journey as treacherous as the Oregon TrailLynn Malen has finally reached her breaking point. Determined to escape an abusive marriage and get out of Independence, Missouri, she disguises herself as a young man and changes her name to \"Larry\" to get the last spot on a wagon train heading west. Accompanied by folks who are also looking for a new future, Lynn finds comfort and friends along the trail. What she didn't expect to find was an attraction to Ben Alenson, the strong, brusque, and determined wagon master.After this wagon train reaches its destination, Ben Alenson is done with the Oregon Trail. Having led two wagon trains across the prairie, he's ready to plant roots in Oregon City and settle for an eligible woman in the town-if he can get his party there alive. The journey is rugged and filled with wild animals, disease, and dangerous terrain. Plus, there's the suspicious \"Larry\", a young man who may not actually be a man at all, and the last thing Ben needs is more trouble along the way.When Ben discovers Lynn's identity and the two form a connection, there's no denying their attraction to one another. But as Lynn's past catches up to her, she and Ben must decide if their love is worth fighting for. Can Lynn overcome her trauma and open up her heart, and is Ben strong enough to win Lynn's trust? The Oregon Trail brings many trials, but love may be the most trying of them all.",
//     "industryIdentifiers": [
//       {
//         "type": "ISBN_10",
//         "identifier": "0578923173"
//       },
//       {
//         "type": "ISBN_13",
//         "identifier": "9780578923178"
//       }
//     ],
//     "readingModes": {
//       "text": false,
//       "image": false
//     },
//     "printType": "BOOK",
//     "maturityRating": "NOT_MATURE",
//     "allowAnonLogging": false,
//     "contentVersion": "preview-1.0.0",
//     "panelizationSummary": {
//       "containsEpubBubbles": false,
//       "containsImageBubbles": false
//     },
//     "imageLinks": {
//       "smallThumbnail": "http://books.google.com/books/content?id=ymF3zgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//       "thumbnail": "http://books.google.com/books/content?id=ymF3zgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
//     },
//     "language": "en",
//     "previewLink": "http://books.google.com/books?id=ymF3zgEACAAJ&dq=the_wind&hl=&cd=1&source=gbs_api",
//     "infoLink": "http://books.google.com/books?id=ymF3zgEACAAJ&dq=the_wind&hl=&source=gbs_api",
//     "canonicalVolumeLink": "https://books.google.com/books/about/To_Catch_the_Wind.html?hl=&id=ymF3zgEACAAJ"
//   },
//   "saleInfo": {
//     "country": "US",
//     "saleability": "NOT_FOR_SALE",
//     "isEbook": false
//   },
//   "accessInfo": {
//     "country": "US",
//     "viewability": "NO_PAGES",
//     "embeddable": false,
//     "publicDomain": false,
//     "textToSpeechPermission": "ALLOWED",
//     "epub": {
//       "isAvailable": false
//     },
//     "pdf": {
//       "isAvailable": false
//     },
//     "webReaderLink": "http://play.google.com/books/reader?id=ymF3zgEACAAJ&hl=&printsec=frontcover&source=gbs_api",
//     "accessViewStatus": "NONE",
//     "quoteSharingAllowed": false
//   },
//   "searchInfo": {
//     "textSnippet": "Determined to escape an abusive marriage and get out of Independence, Missouri, she disguises herself as a young man and changes her name to &quot;Larry&quot; to get the last spot on a wagon train heading west."
//   }
// },
// {  
//   "kind": "books#volume",
//   "id": "ymF3zgEACAAJ",
//   "etag": "zhpUYMIBRmw",
//   "selfLink": "https://www.googleapis.com/books/v1/volumes/ymF3zgEACAAJ",
//   "volumeInfo": {
//     "title": "To Catch the Wind",
//     "subtitle": "Book One of the NW Wind Series",
//     "authors": [
//       "Charli West"
//     ],
//     "publishedDate": "2021-06-21",
//     "description": "Love is a journey as treacherous as the Oregon TrailLynn Malen has finally reached her breaking point. Determined to escape an abusive marriage and get out of Independence, Missouri, she disguises herself as a young man and changes her name to \"Larry\" to get the last spot on a wagon train heading west. Accompanied by folks who are also looking for a new future, Lynn finds comfort and friends along the trail. What she didn't expect to find was an attraction to Ben Alenson, the strong, brusque, and determined wagon master.After this wagon train reaches its destination, Ben Alenson is done with the Oregon Trail. Having led two wagon trains across the prairie, he's ready to plant roots in Oregon City and settle for an eligible woman in the town-if he can get his party there alive. The journey is rugged and filled with wild animals, disease, and dangerous terrain. Plus, there's the suspicious \"Larry\", a young man who may not actually be a man at all, and the last thing Ben needs is more trouble along the way.When Ben discovers Lynn's identity and the two form a connection, there's no denying their attraction to one another. But as Lynn's past catches up to her, she and Ben must decide if their love is worth fighting for. Can Lynn overcome her trauma and open up her heart, and is Ben strong enough to win Lynn's trust? The Oregon Trail brings many trials, but love may be the most trying of them all.",
//     "industryIdentifiers": [
//       {
//         "type": "ISBN_10",
//         "identifier": "0578923173"
//       },
//       {
//         "type": "ISBN_13",
//         "identifier": "9780578923178"
//       }
//     ],
//     "readingModes": {
//       "text": false,
//       "image": false
//     },
//     "printType": "BOOK",
//     "maturityRating": "NOT_MATURE",
//     "allowAnonLogging": false,
//     "contentVersion": "preview-1.0.0",
//     "panelizationSummary": {
//       "containsEpubBubbles": false,
//       "containsImageBubbles": false
//     },
//     "imageLinks": {
//       "smallThumbnail": "http://books.google.com/books/content?id=ymF3zgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//       "thumbnail": "http://books.google.com/books/content?id=ymF3zgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
//     },
//     "language": "en",
//     "previewLink": "http://books.google.com/books?id=ymF3zgEACAAJ&dq=the_wind&hl=&cd=1&source=gbs_api",
//     "infoLink": "http://books.google.com/books?id=ymF3zgEACAAJ&dq=the_wind&hl=&source=gbs_api",
//     "canonicalVolumeLink": "https://books.google.com/books/about/To_Catch_the_Wind.html?hl=&id=ymF3zgEACAAJ"
//   },
//   "saleInfo": {
//     "country": "US",
//     "saleability": "NOT_FOR_SALE",
//     "isEbook": false
//   },
//   "accessInfo": {
//     "country": "US",
//     "viewability": "NO_PAGES",
//     "embeddable": false,
//     "publicDomain": false,
//     "textToSpeechPermission": "ALLOWED",
//     "epub": {
//       "isAvailable": false
//     },
//     "pdf": {
//       "isAvailable": false
//     },
//     "webReaderLink": "http://play.google.com/books/reader?id=ymF3zgEACAAJ&hl=&printsec=frontcover&source=gbs_api",
//     "accessViewStatus": "NONE",
//     "quoteSharingAllowed": false
//   },
//   "searchInfo": {
//     "textSnippet": "Determined to escape an abusive marriage and get out of Independence, Missouri, she disguises herself as a young man and changes her name to &quot;Larry&quot; to get the last spot on a wagon train heading west."
//   }
// },{  
//   "kind": "books#volume",
//   "id": "ymF3zgEACAAJ",
//   "etag": "zhpUYMIBRmw",
//   "selfLink": "https://www.googleapis.com/books/v1/volumes/ymF3zgEACAAJ",
//   "volumeInfo": {
//     "title": "To Catch the Wind",
//     "subtitle": "Book One of the NW Wind Series",
//     "authors": [
//       "Charli West"
//     ],
//     "publishedDate": "2021-06-21",
//     "description": "Love is a journey as treacherous as the Oregon TrailLynn Malen has finally reached her breaking point. Determined to escape an abusive marriage and get out of Independence, Missouri, she disguises herself as a young man and changes her name to \"Larry\" to get the last spot on a wagon train heading west. Accompanied by folks who are also looking for a new future, Lynn finds comfort and friends along the trail. What she didn't expect to find was an attraction to Ben Alenson, the strong, brusque, and determined wagon master.After this wagon train reaches its destination, Ben Alenson is done with the Oregon Trail. Having led two wagon trains across the prairie, he's ready to plant roots in Oregon City and settle for an eligible woman in the town-if he can get his party there alive. The journey is rugged and filled with wild animals, disease, and dangerous terrain. Plus, there's the suspicious \"Larry\", a young man who may not actually be a man at all, and the last thing Ben needs is more trouble along the way.When Ben discovers Lynn's identity and the two form a connection, there's no denying their attraction to one another. But as Lynn's past catches up to her, she and Ben must decide if their love is worth fighting for. Can Lynn overcome her trauma and open up her heart, and is Ben strong enough to win Lynn's trust? The Oregon Trail brings many trials, but love may be the most trying of them all.",
//     "industryIdentifiers": [
//       {
//         "type": "ISBN_10",
//         "identifier": "0578923173"
//       },
//       {
//         "type": "ISBN_13",
//         "identifier": "9780578923178"
//       }
//     ],
//     "readingModes": {
//       "text": false,
//       "image": false
//     },
//     "printType": "BOOK",
//     "maturityRating": "NOT_MATURE",
//     "allowAnonLogging": false,
//     "contentVersion": "preview-1.0.0",
//     "panelizationSummary": {
//       "containsEpubBubbles": false,
//       "containsImageBubbles": false
//     },
//     "imageLinks": {
//       "smallThumbnail": "http://books.google.com/books/content?id=ymF3zgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//       "thumbnail": "http://books.google.com/books/content?id=ymF3zgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
//     },
//     "language": "en",
//     "previewLink": "http://books.google.com/books?id=ymF3zgEACAAJ&dq=the_wind&hl=&cd=1&source=gbs_api",
//     "infoLink": "http://books.google.com/books?id=ymF3zgEACAAJ&dq=the_wind&hl=&source=gbs_api",
//     "canonicalVolumeLink": "https://books.google.com/books/about/To_Catch_the_Wind.html?hl=&id=ymF3zgEACAAJ"
//   },
//   "saleInfo": {
//     "country": "US",
//     "saleability": "NOT_FOR_SALE",
//     "isEbook": false
//   },
//   "accessInfo": {
//     "country": "US",
//     "viewability": "NO_PAGES",
//     "embeddable": false,
//     "publicDomain": false,
//     "textToSpeechPermission": "ALLOWED",
//     "epub": {
//       "isAvailable": false
//     },
//     "pdf": {
//       "isAvailable": false
//     },
//     "webReaderLink": "http://play.google.com/books/reader?id=ymF3zgEACAAJ&hl=&printsec=frontcover&source=gbs_api",
//     "accessViewStatus": "NONE",
//     "quoteSharingAllowed": false
//   },
//   "searchInfo": {
//     "textSnippet": "Determined to escape an abusive marriage and get out of Independence, Missouri, she disguises herself as a young man and changes her name to &quot;Larry&quot; to get the last spot on a wagon train heading west."
//   }
// }]



const SavedPage = ({savedBooks}) => {
  debugger
  return(
    <section className="fetched-books">
      {savedBooks.map(({ id, volumeInfo}) => (
        <div className="book-div" key={id}>
          <p className="cover-title">{volumeInfo.title}</p>
          <img className="saved-img" src={volumeInfo.imageLinks.thumbnail}/>
        </div>
      ))}
    </section>
  )
}

export default SavedPage