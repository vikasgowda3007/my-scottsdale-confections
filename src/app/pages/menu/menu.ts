import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type MenuTab = 'cakes' | 'cupcakes' | 'cookies' | 'espresso';

interface MenuItem {
  name: string;
  description: string;
  flavor?: string;
}

interface MenuCategory {
  title: string;
  tagline: string;
  items: MenuItem[];
}

@Component({
  selector: 'msc-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {
  activeMenuTab: MenuTab = 'cakes';

  menu: {
    cakes: MenuCategory;
    cupcakes: MenuCategory;
    cookies: MenuCategory;
    espresso: MenuCategory;
  } = {
    cakes: {
      title: 'Cakes',
      tagline: 'Perfect for celebrations big and small.',
      items: [
        {
          name: 'Vanilla Cloud Cake',
          flavor: 'Vanilla',
          description: 'Soft vanilla layers with fluffy buttercream swirls.'
        },
        {
          name: 'Scottsdale Chocolate Cake',
          flavor: 'Chocolate',
          description: 'Rich chocolate sponge with decadent chocolate frosting.'
        },
        {
          name: 'Red Velvet Love Cake',
          flavor: 'Red velvet',
          description:
            'Classic red velvet with tangy cream cheese frosting and sprinkles.'
        },
        {
          name: 'Carrot Garden Cake',
          flavor: 'Carrot',
          description:
            'Spiced carrot cake with cream cheese frosting and cute toppings.'
        }
      ]
    },
    cupcakes: {
      title: 'Cupcakes',
      tagline: 'Hand‑piped, cute, and party‑ready.',
      items: [
        {
          name: 'Vanilla Confetti Cupcake',
          flavor: 'Vanilla',
          description: 'Sprinkle‑packed vanilla cupcake with pastel frosting.'
        },
        {
          name: 'Chocolate Midnight Cupcake',
          flavor: 'Chocolate',
          description: 'Deep chocolate cupcake with fudge swirl.'
        },
        {
          name: 'Red Velvet Dream Cupcake',
          flavor: 'Red velvet',
          description: 'Mini version of our red velvet signature cake.'
        },
        {
          name: 'Carrot Sunshine Cupcake',
          flavor: 'Carrot',
          description: 'Carrot cake cupcake with a tiny frosting carrot on top.'
        }
      ]
    },
    cookies: {
      title: 'Cookies',
      tagline: 'Fresh‑baked, soft centers, gently crisp edges.',
      items: [
        {
          name: 'Yellow Sugar Cookie',
          flavor: 'Yellow sugar',
          description:
            'Soft yellow cookie, perfect for colorful decorations and icing.'
        },
        {
          name: 'Chocolate Chip Classic',
          flavor: 'Chocolate chip',
          description: 'Buttery cookie loaded with chocolate chips.'
        },
        {
          name: 'Red Velvet Cookie',
          flavor: 'Red velvet',
          description: 'Crimson cookie with white chocolate chips.'
        },
        {
          name: 'Oatmeal Cozy Cookie',
          flavor: 'Oatmeal',
          description: 'Homestyle oatmeal cookie, comfort in every bite.'
        }
      ]
    },
    espresso: {
      title: 'Espresso Bar',
      tagline: 'Little sips to go with your sweets.',
      items: [
        { name: 'Regular Espresso', description: 'Smooth classic espresso.' },
        {
          name: 'Peppermint Espresso',
          description: 'Espresso with a festive peppermint swirl.'
        },
        {
          name: 'Vanilla Mocha',
          description:
            'Espresso, chocolate, and vanilla, topped with foam and love.'
        },
        {
          name: 'Extra Espresso Shot',
          description: 'Add an extra shot to any drink.'
        }
      ]
    }
  };

  selectMenuTab(tab: MenuTab): void {
    this.activeMenuTab = tab;
  }
}
