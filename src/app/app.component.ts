import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NewsItemComponent} from "./news-item/news-item.component";
import {RecipeComponent} from "./recipe/recipe.component";
import {ThumbnailComponent} from "./thumbnail/thumbnail.component";
import {DisplayModeService} from "./display-mode.service";
import {CutTextPipe} from "./cut-text.pipe";
import {IProduct} from "./interfaces";
import {ProductService} from "./product.service";
import {ProductListComponent} from "./product-list/product-list.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {OverlayComponent} from "./overlay/overlay.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewsItemComponent, RecipeComponent, ThumbnailComponent, CutTextPipe, ProductListComponent, HeaderComponent, FooterComponent, OverlayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angular-shop';

  products: IProduct[] = [];


  readonly pandaText = "Once in a serene bamboo forest in the misty mountains of China, there lived a young panda named Ling. Unlike other pandas who spent their days leisurely munching on bamboo, Ling was known for her curious and adventurous spirit.\n" +
    "\n" +
    "Ling's adventure began on a crisp morning when the sun's rays pierced through the dense canopy, casting a golden hue over the forest. Ling, who had always wondered what lay beyond the forest, decided that today was the day she would find out.\n" +
    "\n" +
    "As she ventured out, the familiar sights and sounds of the forest gave way to new, exciting ones. She encountered a myriad of creatures, from tiny, fluttering butterflies to a majestic, soaring eagle. Each animal she met shared stories of their lives and the world beyond the forest. Ling listened intently, her eyes wide with wonder.\n" +
    "\n" +
    "The most intriguing tale came from an old tortoise who spoke of a mystical lake hidden deep within the mountains. It was said that this lake mirrored the sky and held the secret to true wisdom. Ling's heart raced with excitement. She knew she had to find this lake.\n" +
    "\n" +
    "Her journey took her through uncharted territories filled with challenges. She traversed steep, rocky paths, crossed rushing rivers, and at times, had to find her way through dense fog that enveloped her like a soft, cold blanket. But Ling's determination never wavered.\n" +
    "\n" +
    "Finally, after many days, she reached the mystical lake. It was more breathtaking than she had imagined. The water was so clear and still, it indeed mirrored the sky, creating a beautiful, endless blue expanse. Ling sat by the lake, feeling a sense of peace she had never known. She realized the journey itself, with all its challenges and new experiences, was the true source of wisdom.\n" +
    "\n" +
    "As the sun began to set, casting a warm, orange glow over the lake, Ling decided it was time to return home. She carried with her not only the stories and lessons learned from her journey but also a new sense of purpose and understanding.\n" +
    "\n" +
    "Upon her return, Ling became a storyteller, sharing tales of her adventure with her fellow pandas and other forest creatures. She inspired them with stories of the mystical lake, the diverse creatures she met, and the beauty of the world beyond their bamboo forest.\n" +
    "\n" +
    "Ling's adventure taught her that wisdom comes from experience, courage, and the willingness to step into the unknown. Her story became a legend in the forest, inspiring generations of young pandas to explore, learn, and appreciate the vast and wonderful world around them. And so, Ling the panda became a symbol of curiosity, adventure, and wisdom, treasured not just in her forest, but in the hearts of all who heard her story.";

  constructor(private displayModeService: DisplayModeService, private productsService: ProductService) {

  }

  ngOnInit() {
    this.productsService.getProducts().subscribe({
      next: (products: IProduct[]) => {
        this.products = products;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  isCompact(isCompact: boolean) {
    this.displayModeService.changeCompactStatus(isCompact);
  }
}
