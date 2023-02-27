import { Component } from '@angular/core';

interface IGallery {
  name: string; // Wedding, Travels, Portraits, etc.
  images: Array<string>; // Image URLs
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  galleries: Array<IGallery> = [
    {
      name: 'Wedding',
      images: [
        '/assets/images/gallery/wedding/7.jpeg',
        '/assets/images/gallery/wedding/2.jpeg',
        '/assets/images/gallery/wedding/3.jpeg',
        '/assets/images/gallery/wedding/4.jpeg',
        '/assets/images/gallery/wedding/5.jpeg',
        '/assets/images/gallery/wedding/6.jpeg',
      ],
    },
    {
      name: 'Travels',
      images: [
        '/assets/images/gallery/travel/1.jpeg',
        '/assets/images/gallery/travel/2.jpeg',
        '/assets/images/gallery/travel/3.jpeg',
        '/assets/images/gallery/travel/4.jpeg',
        '/assets/images/gallery/travel/5.jpeg',
        '/assets/images/gallery/travel/6.jpeg',
      ],
    },
    {
      name: 'Portraits',
      images: [
        '/assets/images/gallery/portraits/1.jpeg',
        '/assets/images/gallery/portraits/2.jpeg',
        '/assets/images/gallery/portraits/7.jpeg',
        '/assets/images/gallery/portraits/4.jpeg',
        '/assets/images/gallery/portraits/5.jpeg',
        '/assets/images/gallery/portraits/6.jpeg',
      ],
    },
  ];
}
