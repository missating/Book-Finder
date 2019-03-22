import Vue from 'vue';
import Vuetify from 'vuetify';
import { mount } from '@vue/test-utils';
import BookCard from '@/components/BookCard';

Vue.use(Vuetify);

describe('BookCard.vue', () => {
  const books = {
    kind: 'books#volume',
    id: 'k9ILAQAAMAAJ',
    etag: 'bDAoOV/JqHg',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/k9ILAQAAMAAJ',
    volumeInfo: {
      title: 'Amaze',
      subtitle: 'The People of the Labyrinths',
      authors: [
        'Marie Jeanne de Rooij',
      ],
      publisher: 'Bis Pub',
      publishedDate: '2006',
      description: "Amazing - The People of the Labyrinths (POTL), the Dutch high fashion label of Hans Démoed and Geert de Roij has been creating internationally successful haute couture, independent from prevailing hypes and trends since 1984. With POTL - Démoed and De Rooij both graduates of the Academie voor Beeldende Kunst en Vormgeving, Arnhem - have gained a steadily growing fan base from L.A. to Moscow and from Japan to Amsterdam with no well-devised marketing concept or publicity campaign. Elusive and inspiring - The People of the Labyrinths are known for their all-inclusive concept of fashion, interior, design and cosmetics. In the past 23 years they launched 46 collections all expressing that exclusive hippy-chic style in a distinctive, carefree and divergent POTL pallet of colours. Their sharp graphic prints and the lines of the creations are inspired by heraldry, art, history, photography, nature and science. The hand-painted and printed material give the collections a unique and personal character. (A)mazing - Drawings, academy projects, sketches and photos of all the collections: (A)MAZE gives an extensive and inspiring visual survey of that singular POTL - feeling, the development of the label, inspiration sources and special collaborative projects like The Golden Age collection (winter 2005-2006) photographed by Erwin Olaf. In her introduction, José Teunissen fashion design curator at the Centraal Museum Utrecht, places POTL in a historic fashion design framework while Milou van Rossum, the Volkskrant's fashion columnist gives the POTL duo a chance to air their views in a revealing interview. As book (A)MAZE is quite extraordinary, each copy with its hand-painted linen cover and The People of the Labyrinths silk screen print is unique.",
      industryIdentifiers: [
        {
          type: 'OTHER',
          identifier: 'UVA:X030111032',
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 256,
      printType: 'BOOK',
      categories: [
        'Photography',
      ],
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: '0.1.1.0.preview.0',
      imageLinks: {
        smallThumbnail: 'http://books.google.com/books/content?id=k9ILAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
        thumbnail: 'http://books.google.com/books/content?id=k9ILAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
      },
      language: 'en',
      previewLink: 'http://books.google.com/books?id=k9ILAQAAMAAJ&q=amaze&dq=amaze&hl=&cd=1&source=gbs_api',
      infoLink: 'http://books.google.com/books?id=k9ILAQAAMAAJ&dq=amaze&hl=&source=gbs_api',
      canonicalVolumeLink: 'https://books.google.com/books/about/Amaze.html?hl=&id=k9ILAQAAMAAJ',
    },
  };
  it('should render correctly', () => {
    const wrapper = mount(BookCard, {
      propsData: {
        book: books,
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
