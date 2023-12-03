import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// <li class="gallery-item">
//     <a class="gallery-link" href="large-image.jpg">
//         <img
//             class="gallery-image"
//             src="small-image.jpg"
//             alt="Image description"
//             />
//     </a>
// </li>

const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
});

// <a href="images/image1.jpg"><img src="images/thumbs/thumb1.jpg" alt="" title=""/></a>
// <a href="images/image2.jpg"><img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image"/></a>
