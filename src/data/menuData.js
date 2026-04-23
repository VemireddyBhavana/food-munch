export const menuData = {
  breakfast: [
    {
      id: 'masala-bread-omelette',
      name: 'Masala Bread Omelette',
      description: 'A beloved Indian street food staple: fluffy, masala-spiced omelette cooked directly with buttery bread slices.',
      price: '₹149',
      image: '/assets/images/menu-1.png',
      rating: 4.8,
      tags: 'Breakfast • Indian',
      ingredients: [
        { qty: '2 slices', name: 'Fresh White Bread' },
        { qty: '2', name: 'Fresh Eggs' },
        { qty: '1/4', name: 'Onion chopped' },
        { qty: '1', name: 'Green Chili' },
        { qty: '1 tbsp', name: 'Butter' }
      ],
      instructions: 'Step 1: Whisk eggs with onions, chilies, and spices. Step 2: Pour onto a hot buttered pan. Step 3: Place bread slices on top. Step 4: Flip and toast until golden. Step 5: Serve hot.'
    },
    {
      id: 'brioche-french-toast',
      name: 'Brioche French Toast',
      description: 'Thick slices of buttery brioche soaked in a rich vanilla-cinnamon custard and griddled to golden perfection.',
      price: '₹349',
      image: '/assets/images/menu-2.png',
      rating: 4.9,
      tags: 'Breakfast • French',
      ingredients: [
        { qty: '2 thick slices', name: 'Brioche Bread' },
        { qty: '2', name: 'Large Eggs' },
        { qty: '1/2 cup', name: 'Whole Milk' },
        { qty: '1 tsp', name: 'Vanilla Extract' }
      ],
      instructions: 'Step 1: Whisk eggs, milk, vanilla, and cinnamon. Step 2: Soak brioche slices. Step 3: Cook on a buttered griddle until golden brown. Step 4: Serve with maple syrup.'
    },
    {
      id: 'mediterranean-shakshuka',
      name: 'Mediterranean Shakshuka',
      description: 'Poached eggs in a vibrant, spiced tomato and bell pepper sauce, topped with fresh parsley and crumbled feta.',
      price: '₹399',
      image: '/assets/images/menu-3.png',
      rating: 4.8,
      tags: 'Breakfast • Middle Eastern',
      ingredients: [
        { qty: '3', name: 'Large Eggs' },
        { qty: '1 can', name: 'Crushed Tomatoes' },
        { qty: '1', name: 'Red Bell Pepper' }
      ],
      instructions: 'Step 1: Sauté peppers and onions. Step 2: Add tomatoes and spices. Step 3: Crack eggs into the sauce. Step 4: Cover and cook until set. Step 5: Garnish with feta.'
    },
    {
      id: 'full-english-breakfast',
      name: 'Full English Breakfast',
      description: 'A hearty traditional platter featuring eggs, sausages, bacon, baked beans, tomatoes, and mushrooms.',
      price: '₹549',
      image: '/assets/images/menu-4.png',
      rating: 4.7,
      tags: 'Breakfast • British',
      ingredients: [
        { qty: '2', name: 'Eggs' },
        { qty: '2', name: 'Sausages' },
        { qty: '2 strips', name: 'Bacon' },
        { qty: '1/2 cup', name: 'Baked Beans' }
      ],
      instructions: 'Step 1: Fry sausages and bacon. Step 2: Sauté mushrooms and tomatoes. Step 3: Heat beans. Step 4: Fry eggs. Step 5: Serve with toast.'
    },
    {
      id: 'avocado-sourdough-toast',
      name: 'Avocado Sourdough Toast',
      description: 'Creamy Hass avocado on toasted sourdough, topped with a perfectly poached egg and chili flakes.',
      price: '₹429',
      image: '/assets/images/menu-5.png',
      rating: 4.9,
      tags: 'Breakfast • Modern',
      ingredients: [
        { qty: '1 slice', name: 'Sourdough' },
        { qty: '1/2', name: 'Avocado' },
        { qty: '1', name: 'Poached Egg' }
      ],
      instructions: 'Step 1: Toast sourdough. Step 2: Smash avocado with lemon and salt. Step 3: Spread on toast. Step 4: Top with egg. Step 5: Season and serve.'
    },
    {
      id: 'belgian-waffles-berries',
      name: 'Belgian Waffles & Berries',
      description: 'Crispy, deep-pocketed Belgian waffles served with fresh berries and whipped Chantilly cream.',
      price: '₹379',
      image: '/assets/images/menu-6.png',
      rating: 4.8,
      tags: 'Breakfast • Belgian',
      ingredients: [
        { qty: '2', name: 'Large Waffles' },
        { qty: '1/2 cup', name: 'Fresh Berries' }
      ],
      instructions: 'Step 1: Cook waffles until crisp. Step 2: Arrange on plate. Step 3: Top with berries and whipped cream. Step 4: Drizzle with maple syrup.'
    },
    {
      id: 'classic-eggs-benedict',
      name: 'Classic Eggs Benedict',
      description: 'Poached eggs and Canadian bacon on toasted English muffins, smothered in silky Hollandaise sauce.',
      price: '₹499',
      image: '/assets/images/menu-1.png',
      rating: 4.7,
      tags: 'Breakfast • American',
      ingredients: [
        { qty: '2', name: 'Poached Eggs' },
        { qty: '1', name: 'English Muffin' },
        { qty: '1/4 cup', name: 'Hollandaise' }
      ],
      instructions: 'Step 1: Toast muffins. Step 2: Sauté bacon. Step 3: Poach eggs. Step 4: Assemble. Step 5: Pour Hollandaise and serve.'
    },
    {
      id: 'amazonian-acai-bowl',
      name: 'Amazonian Acai Bowl',
      description: 'A refreshing frozen acai blend topped with granola, banana slices, and coconut flakes.',
      price: '₹389',
      image: '/assets/images/menu-2.png',
      rating: 4.9,
      tags: 'Breakfast • Healthy',
      ingredients: [
        { qty: '1 pack', name: 'Frozen Acai' },
        { qty: '1/2 cup', name: 'Granola' },
        { qty: '1/2', name: 'Banana' }
      ],
      instructions: 'Step 1: Blend acai until thick. Step 2: Pour into bowl. Step 3: Arrange toppings. Step 4: Drizzle with honey and serve cold.'
    },
    {
      id: 'mexican-chilaquiles',
      name: 'Chilaquiles Rojos',
      description: 'Traditional Mexican breakfast of crispy tortilla chips simmered in red salsa, topped with eggs and avocado.',
      price: '₹449',
      image: '/assets/images/menu-3.png',
      rating: 4.8,
      tags: 'Breakfast • Mexican',
      ingredients: [
        { qty: '2 cups', name: 'Tortilla Chips' },
        { qty: '1 cup', name: 'Red Salsa' },
        { qty: '1', name: 'Fried Egg' }
      ],
      instructions: 'Step 1: Heat salsa. Step 2: Toss chips in salsa. Step 3: Top with fried egg and avocado. Step 4: Add cream and cheese. Step 5: Serve.'
    },
    {
      id: 'blueberry-oat-pancakes',
      name: 'Blueberry Oatmeal Pancakes',
      description: 'Hearty pancakes made with rolled oats and bursting with fresh blueberries. Served with honey.',
      price: '₹299',
      image: '/assets/images/menu-4.png',
      rating: 4.6,
      tags: 'Breakfast • Healthy',
      ingredients: [
        { qty: '1 cup', name: 'Rolled Oats' },
        { qty: '1/2 cup', name: 'Blueberries' }
      ],
      instructions: 'Step 1: Blend oats to flour. Step 2: Mix batter. Step 3: Fold in berries. Step 4: Cook until golden. Step 5: Serve with honey.'
    },
    {
      id: 'dutch-mini-pancakes',
      name: 'Dutch Poffertjes',
      description: 'Dainty and light mini pancakes from the Netherlands, served with butter and powdered sugar.',
      price: '₹229',
      image: '/assets/images/menu-5.png',
      rating: 4.9,
      tags: 'Breakfast • Dutch',
      ingredients: [
        { qty: '250g', name: 'Flour' },
        { qty: '1 cup', name: 'Milk' }
      ],
      instructions: 'Step 1: Make yeast batter. Step 2: Cook in special pan. Step 3: Serve with butter and sugar.'
    },
    {
      id: 'african-mandazi-buns',
      name: 'African Mandazi',
      description: 'Soft East African fried bread infused with aromatic cardamom and coconut milk.',
      price: '₹189',
      image: '/assets/images/menu-6.png',
      rating: 4.8,
      tags: 'Breakfast • African',
      ingredients: [
        { qty: '3 cups', name: 'Flour' },
        { qty: '1 cup', name: 'Coconut Milk' },
        { qty: '1 tsp', name: 'Cardamom' }
      ],
      instructions: 'Step 1: Knead dough with coconut milk and cardamom. Step 2: Let rise for 1 hour. Step 3: Cut into triangles. Step 4: Deep fry until golden brown.'
    },
    {
      id: 'steak-and-eggs-platter',
      name: 'Steak & Eggs',
      description: 'Premium grilled sirloin steak served with two farm-fresh eggs and crispy breakfast potatoes.',
      price: '₹749',
      image: '/assets/images/menu-1.png',
      rating: 4.9,
      tags: 'Breakfast • Premium',
      ingredients: [
        { qty: '200g', name: 'Sirloin Steak' },
        { qty: '2', name: 'Eggs' },
        { qty: '1 cup', name: 'Potatoes' }
      ],
      instructions: 'Step 1: Grill steak to desired doneness. Step 2: Fry eggs. Step 3: Roast potatoes. Step 4: Plate and serve together.'
    },
    {
      id: 'smoked-salmon-bagel',
      name: 'Smoked Salmon Bagel',
      description: 'Toasted bagel spread with herb cream cheese, topped with premium smoked salmon, capers, and red onion.',
      price: '₹459',
      image: '/assets/images/menu-2.png',
      rating: 4.8,
      tags: 'Breakfast • Deli',
      ingredients: [
        { qty: '1', name: 'Everything Bagel' },
        { qty: '50g', name: 'Smoked Salmon' },
        { qty: '2 tbsp', name: 'Cream Cheese' }
      ],
      instructions: 'Step 1: Toast bagel. Step 2: Spread cream cheese. Step 3: Layer salmon, onions, and capers. Step 4: Serve open-faced.'
    },
    {
      id: 'turkish-menemen',
      name: 'Turkish Menemen',
      description: 'A traditional Turkish breakfast of scrambled eggs with tomatoes, green peppers, and spices.',
      price: '₹329',
      image: '/assets/images/menu-3.png',
      rating: 4.7,
      tags: 'Breakfast • Turkish',
      ingredients: [
        { qty: '2', name: 'Eggs' },
        { qty: '2', name: 'Tomatoes' },
        { qty: '1', name: 'Green Pepper' }
      ],
      instructions: 'Step 1: Sauté peppers and tomatoes. Step 2: Add spices. Step 3: Stir in eggs gently. Step 4: Cook until soft-scrambled.'
    },
    {
      id: 'japanese-breakfast-set',
      name: 'Japanese Breakfast Set',
      description: 'A balanced set featuring grilled salmon, miso soup, steamed rice, and pickled vegetables.',
      price: '₹599',
      image: '/assets/images/menu-4.png',
      rating: 4.8,
      tags: 'Breakfast • Japanese',
      ingredients: [
        { qty: '1 piece', name: 'Grilled Salmon' },
        { qty: '1 bowl', name: 'Miso Soup' },
        { qty: '1 bowl', name: 'Rice' }
      ],
      instructions: 'Step 1: Grill salmon. Step 2: Prepare miso soup. Step 3: Steam rice. Step 4: Arrange with pickles and serve.'
    },
    {
      id: 'chia-pudding-mango',
      name: 'Chia Seed Pudding',
      description: 'Overnight chia seeds soaked in coconut milk, topped with fresh mango puree and toasted almonds.',
      price: '₹319',
      image: '/assets/images/menu-5.png',
      rating: 4.6,
      tags: 'Breakfast • Healthy',
      ingredients: [
        { qty: '1/4 cup', name: 'Chia Seeds' },
        { qty: '1 cup', name: 'Coconut Milk' },
        { qty: '1/2', name: 'Mango' }
      ],
      instructions: 'Step 1: Soak seeds in milk overnight. Step 2: Stir well. Step 3: Top with mango and nuts. Step 4: Serve chilled.'
    },
    {
      id: 'huevos-rancheros',
      name: 'Huevos Rancheros',
      description: 'Fried eggs served on corn tortillas with warm salsa, refried beans, and cotija cheese.',
      price: '₹419',
      image: '/assets/images/menu-6.png',
      rating: 4.8,
      tags: 'Breakfast • Mexican',
      ingredients: [
        { qty: '2', name: 'Corn Tortillas' },
        { qty: '2', name: 'Eggs' },
        { qty: '1/2 cup', name: 'Salsa' }
      ],
      instructions: 'Step 1: Warm tortillas. Step 2: Fry eggs. Step 3: Layer beans and eggs on tortillas. Step 4: Top with salsa and cheese.'
    },
    {
      id: 'swiss-bircher-muesli',
      name: 'Bircher Muesli',
      description: 'The original Swiss overnight oats with grated apple, nuts, honey, and fresh seasonal fruit.',
      price: '₹359',
      image: '/assets/images/menu-1.png',
      rating: 4.7,
      tags: 'Breakfast • Swiss',
      ingredients: [
        { qty: '1 cup', name: 'Oats' },
        { qty: '1', name: 'Grated Apple' },
        { qty: '1/2 cup', name: 'Yogurt' }
      ],
      instructions: 'Step 1: Soak oats in apple juice and yogurt. Step 2: Add grated apple. Step 3: Let sit overnight. Step 4: Top with nuts and fruit.'
    },
    {
      id: 'chocolate-ganache-waffles',
      name: 'Chocolate Ganache Waffles',
      description: 'Decadent chocolate waffles topped with dark chocolate ganache and roasted hazelnuts.',
      price: '₹399',
      image: '/assets/images/menu-2.png',
      rating: 4.9,
      tags: 'Breakfast • Dessert',
      ingredients: [
        { qty: '2', name: 'Chocolate Waffles' },
        { qty: '2 tbsp', name: 'Chocolate Ganache' }
      ],
      instructions: 'Step 1: Bake waffles. Step 2: Prepare ganache. Step 3: Drizzle over waffles. Step 4: Garnish with nuts and serve.'
    },
    {
      id: 'rommegrot-norwegian-porridge',
      name: 'Rømmegrøt',
      description: 'Traditional Norwegian sour cream porridge served with melted butter and cinnamon.',
      price: '₹269',
      image: '/assets/images/menu-3.png',
      rating: 4.8,
      tags: 'Breakfast • Norwegian',
      ingredients: [
        { qty: '500ml', name: 'Sour Cream' },
        { qty: '1 cup', name: 'Flour' }
      ],
      instructions: 'Step 1: Simmer cream. Step 2: Add flour. Step 3: Skim off fat. Step 4: Add warm milk. Step 5: Serve with butter and sugar.'
    },
    {
      id: 'classic-masala-dosa',
      name: 'Crispy Masala Dosa',
      description: 'A thin, golden-brown fermented rice crepe filled with a savory spiced potato mash. Served with coconut chutney and tangy sambar.',
      price: '₹189',
      image: '/assets/images/menu-4.png',
      rating: 4.9,
      tags: 'Breakfast • South Indian',
      ingredients: [
        { qty: '1 cup', name: 'Dosa Batter' },
        { qty: '1/2 cup', name: 'Potato Masala' },
        { qty: '1 tbsp', name: 'Ghee' }
      ],
      instructions: 'Step 1: Spread batter thinly on a hot tawa. Step 2: Drizzle ghee and cook until crisp. Step 3: Place potato masala in center. Step 4: Fold and serve hot with chutney and sambar.'
    },
    {
      id: 'soft-steamed-idli',
      name: 'Steamed Idli & Sambar',
      description: 'Pillowy-soft steamed rice cakes served with a flavorful lentil-based vegetable stew (Sambar) and fresh coconut chutney.',
      price: '₹149',
      image: '/assets/images/menu-5.png',
      rating: 4.8,
      tags: 'Breakfast • South Indian',
      ingredients: [
        { qty: '3', name: 'Idlis' },
        { qty: '1 cup', name: 'Sambar' },
        { qty: '2 tbsp', name: 'Coconut Chutney' }
      ],
      instructions: 'Step 1: Steam idli batter in molds for 10 minutes. Step 2: Prepare sambar with lentils and veggies. Step 3: Serve warm idlis with bowls of sambar and chutney.'
    },
    {
      id: 'crispy-medu-vada',
      name: 'Medu Vada Platter',
      description: 'Savory, donut-shaped lentil fritters that are crispy on the outside and soft on the inside. A classic South Indian protein-rich breakfast.',
      price: '₹169',
      image: '/assets/images/menu-6.png',
      rating: 4.7,
      tags: 'Breakfast • South Indian',
      ingredients: [
        { qty: '2', name: 'Medu Vadas' },
        { qty: '1/2 cup', name: 'Sambar' },
        { qty: '1 tbsp', name: 'Ginger-Chili Paste' }
      ],
      instructions: 'Step 1: Grind soaked urad dal into a fluffy batter. Step 2: Shape into donuts and deep fry until golden. Step 3: Serve piping hot with sambar.'
    },
    {
      id: 'onion-uttapam-savory',
      name: 'Onion & Tomato Uttapam',
      description: 'Thick, savory pancakes made from fermented rice and lentil batter, topped with finely chopped onions, tomatoes, and green chilies.',
      price: '₹199',
      image: '/assets/images/menu-1.png',
      rating: 4.8,
      tags: 'Breakfast • South Indian',
      ingredients: [
        { qty: '1 cup', name: 'Uttapam Batter' },
        { qty: '1/4 cup', name: 'Chopped Onions' },
        { qty: '1/4 cup', name: 'Chopped Tomatoes' }
      ],
      instructions: 'Step 1: Pour thick batter on tawa. Step 2: Top with veggies and press lightly. Step 3: Cook both sides with oil until golden. Step 4: Serve with tomato chutney.'
    },
    {
      id: 'kanda-poha-maharashtrian',
      name: 'Kanda Poha',
      description: 'A light and healthy Maharashtrian breakfast made with flattened rice, sautéed onions, potatoes, and toasted peanuts.',
      price: '₹129',
      image: '/assets/images/menu-2.png',
      rating: 4.6,
      tags: 'Breakfast • Indian',
      ingredients: [
        { qty: '2 cups', name: 'Flattened Rice (Poha)' },
        { qty: '1', name: 'Onion' },
        { qty: '1/4 cup', name: 'Peanuts' },
        { qty: '1/2 tsp', name: 'Turmeric' }
      ],
      instructions: 'Step 1: Rinse poha and drain. Step 2: Sauté onions, potatoes, and peanuts with spices. Step 3: Mix in poha and steam for 2 minutes. Step 4: Garnish with coriander and lemon.'
    },
    {
      id: 'rava-upma-vegetable',
      name: 'Vegetable Rava Upma',
      description: 'A savory semolina porridge cooked with fresh vegetables, curry leaves, and mustard seeds. Comforting and nutritious.',
      price: '₹139',
      image: '/assets/images/menu-3.png',
      rating: 4.5,
      tags: 'Breakfast • Indian',
      ingredients: [
        { qty: '1 cup', name: 'Roasted Semolina' },
        { qty: '1/2 cup', name: 'Mixed Veggies' },
        { qty: '1 tsp', name: 'Mustard Seeds' }
      ],
      instructions: 'Step 1: Roast semolina until fragrant. Step 2: Sauté veggies and tempering. Step 3: Add water and boil. Step 4: Stir in semolina and cook until thick.'
    },
    {
      id: 'puri-bhaji-north-indian',
      name: 'Classic Puri Bhaji',
      description: 'Deep-fried golden wheat breads (Puris) served with a mildly spiced, aromatic potato curry (Bhaji). A weekend favorite across India.',
      price: '₹219',
      image: '/assets/images/menu-4.png',
      rating: 4.9,
      tags: 'Breakfast • Indian',
      ingredients: [
        { qty: '3', name: 'Puris' },
        { qty: '1 bowl', name: 'Potato Bhaji' },
        { qty: '1', name: 'Pickle' }
      ],
      instructions: 'Step 1: Knead wheat dough and fry small circles into puffed puris. Step 2: Cook potatoes with turmeric and cumin. Step 3: Serve together while hot.'
    },
    {
      id: 'kerala-appam-stew',
      name: 'Appam with Vegetable Stew',
      description: 'Lacy, fermented rice and coconut milk crepes with a soft center and crispy edges, served with a mild, aromatic coconut milk stew.',
      price: '₹249',
      image: '/assets/images/menu-5.png',
      rating: 4.8,
      tags: 'Breakfast • Kerala',
      ingredients: [
        { qty: '2', name: 'Appams' },
        { qty: '1 bowl', name: 'Veg Stew' },
        { qty: '1/2 cup', name: 'Coconut Milk' }
      ],
      instructions: 'Step 1: Prepare fermented appam batter. Step 2: Cook in an appam-chatti (pan). Step 3: Simmer veggies in coconut milk and spices for the stew. Step 4: Serve hot.'
    },
    {
      id: 'mysore-masala-dosa-special',
      name: 'Mysore Masala Dosa',
      description: 'A spicy variation of the classic dosa, smeared with a signature red garlic-chili chutney before being stuffed with potato masala.',
      price: '₹209',
      image: '/assets/images/menu-6.png',
      rating: 4.9,
      tags: 'Breakfast • South Indian',
      ingredients: [
        { qty: '1 cup', name: 'Dosa Batter' },
        { qty: '2 tbsp', name: 'Mysore Chutney' },
        { qty: '1/2 cup', name: 'Potato Masala' }
      ],
      instructions: 'Step 1: Spread dosa batter. Step 2: Apply red chutney on the inner surface. Step 3: Add potato filling and butter. Step 4: Fold and serve with extra chutney.'
    }
  ],
  appetizers: [
    {
      id: 'sicilian-arancini-mozzarella',
      name: 'Sicilian Arancini',
      description: 'Crispy, golden risotto balls filled with molten mozzarella and savory ragù. Served with a zesty marinara dipping sauce.',
      price: '₹349',
      image: '/assets/images/menu-1.png',
      rating: 4.9,
      tags: 'Appetizer • Italian',
      ingredients: [
        { qty: '2 cups', name: 'Arborio Rice' },
        { qty: '1/2 cup', name: 'Mozzarella cubes' },
        { qty: '1 cup', name: 'Breadcrumbs' }
      ],
      instructions: 'Step 1: Form cooled risotto into balls. Step 2: Stuff with a mozzarella cube. Step 3: Coat in flour, egg, and breadcrumbs. Step 4: Deep fry until golden brown.'
    },
    {
      id: 'classic-bruschetta-pomodoro',
      name: 'Tomato Basil Bruschetta',
      description: 'Toasted artisan bread rubbed with garlic and topped with marinated heirloom tomatoes, fresh basil, and balsamic glaze.',
      price: '₹289',
      image: '/assets/images/menu-2.png',
      rating: 4.8,
      tags: 'Appetizer • Italian',
      ingredients: [
        { qty: '4 slices', name: 'Sourdough' },
        { qty: '2', name: 'Roma Tomatoes' },
        { qty: '1 tbsp', name: 'Balsamic Glaze' }
      ],
      instructions: 'Step 1: Grill bread slices. Step 2: Rub with garlic. Step 3: Mix tomatoes and basil with olive oil. Step 4: Top bread and drizzle with glaze.'
    },
    {
      id: 'gambas-al-ajillo-shrimp',
      name: 'Gambas al Ajillo',
      description: 'Classic Spanish garlic shrimp sizzled in extra virgin olive oil with chili flakes and fresh parsley. Served with crusty bread.',
      price: '₹499',
      image: '/assets/images/menu-3.png',
      rating: 4.9,
      tags: 'Appetizer • Spanish',
      ingredients: [
        { qty: '200g', name: 'Tiger Prawns' },
        { qty: '4 cloves', name: 'Garlic' },
        { qty: '2 tbsp', name: 'Olive Oil' }
      ],
      instructions: 'Step 1: Heat oil in a skillet. Step 2: Sauté garlic and chili. Step 3: Add shrimp and cook for 3 minutes. Step 4: Garnish with parsley and serve.'
    },
    {
      id: 'crispy-calamari-aioli',
      name: 'Crispy Calamari',
      description: 'Tender squid rings lightly battered and fried to perfection. Served with a zesty lemon aioli and charred lemon wedges.',
      price: '₹429',
      image: '/assets/images/menu-4.png',
      rating: 4.7,
      tags: 'Appetizer • Seafood',
      ingredients: [
        { qty: '250g', name: 'Squid Rings' },
        { qty: '1/2 cup', name: 'Cornstarch' },
        { qty: '1/4 cup', name: 'Aioli' }
      ],
      instructions: 'Step 1: Coat squid in seasoned flour. Step 2: Flash fry for 2 minutes. Step 3: Serve immediately with aioli and lemon.'
    },
    {
      id: 'stuffed-mushrooms-goat-cheese',
      name: 'Goat Cheese Stuffed Mushrooms',
      description: 'Cremini mushroom caps filled with a creamy herb and goat cheese mixture, topped with buttery Panko breadcrumbs.',
      price: '₹379',
      image: '/assets/images/menu-5.png',
      rating: 4.8,
      tags: 'Appetizer • Vegetarian',
      ingredients: [
        { qty: '12', name: 'Cremini Mushrooms' },
        { qty: '100g', name: 'Goat Cheese' },
        { qty: '2 tbsp', name: 'Panko' }
      ],
      instructions: 'Step 1: Remove stems. Step 2: Fill caps with cheese and herbs. Step 3: Sprinkle crumbs on top. Step 4: Bake at 200°C for 15 minutes.'
    },
    {
      id: 'chicken-satay-peanut-sauce',
      name: 'Chicken Satay',
      description: 'Grilled chicken skewers marinated in coconut milk and spices, served with a rich, velvety peanut dipping sauce.',
      price: '₹399',
      image: '/assets/images/menu-6.png',
      rating: 4.8,
      tags: 'Appetizer • Southeast Asian',
      ingredients: [
        { qty: '250g', name: 'Chicken Breast' },
        { qty: '1/2 cup', name: 'Peanut Butter' },
        { qty: '2 tbsp', name: 'Soy Sauce' }
      ],
      instructions: 'Step 1: Marinate chicken skewers. Step 2: Grill until charred. Step 3: Prepare peanut sauce with lime and chili. Step 4: Serve hot.'
    },
    {
      id: 'vegetable-spring-rolls-crispy',
      name: 'Vegetable Spring Rolls',
      description: 'Hand-rolled crispy pastry filled with shredded cabbage, carrots, and glass noodles. Served with sweet chili sauce.',
      price: '₹249',
      image: '/assets/images/menu-1.png',
      rating: 4.6,
      tags: 'Appetizer • Asian',
      ingredients: [
        { qty: '4', name: 'Spring Roll Wrappers' },
        { qty: '1 cup', name: 'Shredded Veggies' }
      ],
      instructions: 'Step 1: Sauté veggies. Step 2: Roll in wrappers. Step 3: Deep fry until golden. Step 4: Serve with sweet chili dip.'
    },
    {
      id: 'caprese-skewers-balsamic',
      name: 'Caprese Skewers',
      description: 'Elegant skewers of cherry tomatoes, fresh bocconcini mozzarella, and basil leaves, drizzled with aged balsamic glaze.',
      price: '₹319',
      image: '/assets/images/menu-2.png',
      rating: 4.9,
      tags: 'Appetizer • Vegetarian',
      ingredients: [
        { qty: '10', name: 'Cherry Tomatoes' },
        { qty: '10', name: 'Mozzarella Balls' },
        { qty: '10', name: 'Basil Leaves' }
      ],
      instructions: 'Step 1: Thread tomato, basil, and cheese on a skewer. Step 2: Repeat. Step 3: Season with salt. Step 4: Drizzle with balsamic glaze.'
    },
    {
      id: 'dynamite-shrimp-spicy',
      name: 'Dynamite Shrimp',
      description: 'Tempura-battered crispy shrimp tossed in a signature spicy, creamy dynamite sauce. Topped with spring onions.',
      price: '₹549',
      image: '/assets/images/menu-3.png',
      rating: 4.9,
      tags: 'Appetizer • Fusion',
      ingredients: [
        { qty: '12', name: 'Jumbo Shrimp' },
        { qty: '1/4 cup', name: 'Sriracha Mayo' }
      ],
      instructions: 'Step 1: Batter and fry shrimp. Step 2: Toss in spicy mayo. Step 3: Garnish with scallions. Step 4: Serve in a martini glass.'
    },
    {
      id: 'truffle-parmesan-fries',
      name: 'Truffle Parmesan Fries',
      description: 'Double-fried shoestring fries tossed in aromatic truffle oil, fresh parsley, and a generous grating of aged Parmesan.',
      price: '₹299',
      image: '/assets/images/menu-4.png',
      rating: 4.8,
      tags: 'Appetizer • Modern',
      ingredients: [
        { qty: '2 cups', name: 'Potatoes' },
        { qty: '1 tbsp', name: 'Truffle Oil' },
        { qty: '2 tbsp', name: 'Parmesan' }
      ],
      instructions: 'Step 1: Fry potatoes twice for crispness. Step 2: Toss with oil while hot. Step 3: Sprinkle cheese and salt. Step 4: Garnish with parsley.'
    },
    {
      id: 'greek-spanakopita-triangles',
      name: 'Spanakopita Triangles',
      description: 'Flaky phyllo pastry triangles filled with a savory blend of spinach, feta cheese, and Mediterranean herbs.',
      price: '₹349',
      image: '/assets/images/menu-5.png',
      rating: 4.7,
      tags: 'Appetizer • Greek',
      ingredients: [
        { qty: '4 sheets', name: 'Phyllo Pastry' },
        { qty: '1 cup', name: 'Spinach & Feta' }
      ],
      instructions: 'Step 1: Mix spinach and feta. Step 2: Cut phyllo into strips. Step 3: Fold filling into triangles. Step 4: Bake until golden and flaky.'
    },
    {
      id: 'pork-gyoza-dumplings',
      name: 'Japanese Gyoza',
      description: 'Pan-seared pork and cabbage dumplings with a crispy base and tender top. Served with a soy-ginger dipping sauce.',
      price: '₹389',
      image: '/assets/images/menu-6.png',
      rating: 4.8,
      tags: 'Appetizer • Japanese',
      ingredients: [
        { qty: '6', name: 'Gyoza Wrappers' },
        { qty: '100g', name: 'Minced Pork' }
      ],
      instructions: 'Step 1: Fill and pleat dumplings. Step 2: Pan fry base until crisp. Step 3: Steam with a splash of water. Step 4: Serve with soy dip.'
    },
    {
      id: 'buffalo-chicken-wings-classic',
      name: 'Buffalo Chicken Wings',
      description: 'Classic New York style wings tossed in a spicy, buttery Buffalo sauce. Served with celery sticks and blue cheese dip.',
      price: '₹449',
      image: '/assets/images/menu-1.png',
      rating: 4.7,
      tags: 'Appetizer • American',
      ingredients: [
        { qty: '6', name: 'Chicken Wings' },
        { qty: '1/4 cup', name: 'Buffalo Sauce' }
      ],
      instructions: 'Step 1: Fry or bake wings until crisp. Step 2: Toss in hot sauce. Step 3: Arrange with celery. Step 4: Serve with dip.'
    },
    {
      id: 'hummus-pita-platter',
      name: 'Hummus & Warm Pita',
      description: 'Silky smooth chickpea hummus topped with olive oil and za’atar, served with warm, pillowy pita bread triangles.',
      price: '₹279',
      image: '/assets/images/menu-2.png',
      rating: 4.8,
      tags: 'Appetizer • Middle Eastern',
      ingredients: [
        { qty: '1 cup', name: 'Hummus' },
        { qty: '2', name: 'Pita Breads' },
        { qty: '1 tbsp', name: 'Olive Oil' }
      ],
      instructions: 'Step 1: Swirl hummus in a bowl. Step 2: Add oil and spices. Step 3: Toast pita bread. Step 4: Slice and serve warm.'
    },
    {
      id: 'beef-carpaccio-truffle',
      name: 'Beef Carpaccio',
      description: 'Thinly sliced raw prime beef tenderloin topped with arugula, capers, parmesan shavings, and truffle oil.',
      price: '₹649',
      image: '/assets/images/menu-3.png',
      rating: 4.9,
      tags: 'Appetizer • French',
      ingredients: [
        { qty: '100g', name: 'Beef Tenderloin' },
        { qty: '1/2 cup', name: 'Arugula' }
      ],
      instructions: 'Step 1: Slice beef paper-thin. Step 2: Arrange on a cold plate. Step 3: Season with oil and lemon. Step 4: Garnish with parmesan.'
    },
    {
      id: 'prosciutto-wrapped-asparagus',
      name: 'Prosciutto Asparagus',
      description: 'Tender asparagus spears wrapped in salty Prosciutto di Parma and roasted until crispy. Drizzled with lemon oil.',
      price: '₹419',
      image: '/assets/images/menu-4.png',
      rating: 4.8,
      tags: 'Appetizer • Italian',
      ingredients: [
        { qty: '8', name: 'Asparagus Spears' },
        { qty: '4 slices', name: 'Prosciutto' }
      ],
      instructions: 'Step 1: Wrap each spear in ham. Step 2: Roast at 200°C for 10 minutes. Step 3: Season with black pepper. Step 4: Serve hot.'
    },
    {
      id: 'baked-brie-honey-walnuts',
      name: 'Baked Brie with Honey',
      description: 'Warm, gooey French Brie cheese topped with toasted walnuts and honey. Served with crostini and apple slices.',
      price: '₹529',
      image: '/assets/images/menu-5.png',
      rating: 4.9,
      tags: 'Appetizer • French',
      ingredients: [
        { qty: '1 wheel', name: 'Brie' },
        { qty: '2 tbsp', name: 'Honey' },
        { qty: '1/4 cup', name: 'Walnuts' }
      ],
      instructions: 'Step 1: Place brie in a small dish. Step 2: Top with honey and nuts. Step 3: Bake for 12 minutes. Step 4: Serve with bread.'
    },
    {
      id: 'ceviche-lime-cilantro',
      name: 'Sea Bass Ceviche',
      description: 'Fresh sea bass cured in citrus juices with red onion, chili, and cilantro. Served with crispy plantain chips.',
      price: '₹589',
      image: '/assets/images/menu-6.png',
      rating: 4.9,
      tags: 'Appetizer • Peruvian',
      ingredients: [
        { qty: '150g', name: 'Sea Bass' },
        { qty: '3 tbsp', name: 'Lime Juice' }
      ],
      instructions: 'Step 1: Cube fish. Step 2: Marinate in juice for 15 minutes. Step 3: Toss with onions and chili. Step 4: Serve chilled.'
    },
    {
      id: 'mini-crab-cakes-tartar',
      name: 'Mini Crab Cakes',
      description: 'Pan-seared lump crab cakes served with a house-made caper tartar sauce and fresh slaw.',
      price: '₹479',
      image: '/assets/images/menu-1.png',
      rating: 4.8,
      tags: 'Appetizer • Seafood',
      ingredients: [
        { qty: '100g', name: 'Lump Crab' },
        { qty: '1 tbsp', name: 'Tartar Sauce' }
      ],
      instructions: 'Step 1: Mix crab with binder. Step 2: Form small patties. Step 3: Pan fry until golden. Step 4: Serve with tartar dip.'
    },
    {
      id: 'classic-falafel-tahini',
      name: 'Handcrafted Falafel',
      description: 'Crispy fried chickpea fritters seasoned with cumin and coriander. Served with a smooth tahini dip.',
      price: '₹229',
      image: '/assets/images/menu-2.png',
      rating: 4.7,
      tags: 'Appetizer • Middle Eastern',
      ingredients: [
        { qty: '4', name: 'Falafel Balls' },
        { qty: '2 tbsp', name: 'Tahini' }
      ],
      instructions: 'Step 1: Grind chickpeas with spices. Step 2: Shape into balls. Step 3: Deep fry until brown. Step 4: Serve with tahini.'
    }
  ],
  drinks: [
    {
      id: 'mango-lassi-premium',
      name: 'Mango Lassi Premium',
      description: 'Thick and creamy yogurt drink blended with hand-picked Alphonso mango pulp.',
      price: '₹129',
      image: '/assets/images/menu-3.png',
      rating: 4.9,
      tags: 'Drinks • Indian',
      ingredients: [
        { qty: '1 cup', name: 'Fresh Yoghurt' },
        { qty: '1/2 cup', name: 'Mango Pulp' },
        { qty: '1/2 tsp', name: 'Cardamom' },
        { qty: '2 tsp', name: 'Honey' }
      ],
      instructions: 'Blend fresh yoghurt and mango pulp until smooth. Adjust sweetness with honey. Chill well and top with a pinch of cardamom and crushed pistachios.'
    },
    {
      id: 'cold-coffee-ice-cream',
      name: 'Cold Coffee with Ice Cream',
      description: 'A rich and creamy blend of premium espresso, chilled milk, and a hint of vanilla, topped with a giant scoop of velvety vanilla ice cream.',
      price: '₹189',
      image: '/assets/images/menu-4.png',
      rating: 4.8,
      tags: 'Drinks • International',
      ingredients: [
        { qty: '1 shot', name: 'Premium Espresso' },
        { qty: '1.5 cups', name: 'Chilled Milk' },
        { qty: '1 scoop', name: 'Vanilla Ice Cream' },
        { qty: '2 tbsp', name: 'Chocolate Syrup' }
      ],
      instructions: 'Step 1: Blend espresso, chilled milk, and sugar until frothy. Step 2: Drizzle chocolate syrup inside a tall glass. Step 3: Pour the coffee into the glass. Step 4: Top with a large scoop of vanilla ice cream and extra chocolate shavings.'
    },
    {
      id: 'virgin-pina-colada',
      name: 'Virgin Pina Colada',
      description: 'An exotic tropical escape in a glass: a smooth blend of fresh pineapple juice, creamy coconut milk, and crushed ice.',
      price: '₹229',
      image: '/assets/images/menu-5.png',
      rating: 4.9,
      tags: 'Drinks • Tropical',
      ingredients: [
        { qty: '1 cup', name: 'Pineapple Juice' },
        { qty: '1/2 cup', name: 'Coconut Cream' },
        { qty: '1/4 cup', name: 'Crushed Ice' },
        { qty: '1 slice', name: 'Fresh Pineapple' }
      ],
      instructions: 'Step 1: Combine pineapple juice, coconut cream, and ice in a blender. Step 2: Blend until thick and creamy. Step 3: Pour into a chilled hurricane glass. Step 4: Garnish with a pineapple wedge and a cocktail cherry.'
    },
    {
      id: 'watermelon-mint-cooler',
      name: 'Watermelon Mint Cooler',
      description: 'The ultimate summer refresher: fresh watermelon juice muddled with garden-fresh mint leaves and a splash of lime.',
      price: '₹149',
      image: '/assets/images/menu-6.png',
      rating: 4.7,
      tags: 'Drinks • Seasonal',
      ingredients: [
        { qty: '2 cups', name: 'Diced Watermelon' },
        { qty: '6-8', name: 'Mint Leaves' },
        { qty: '1 tbsp', name: 'Lime Juice' },
        { qty: '1 pinch', name: 'Black Salt' }
      ],
      instructions: 'Step 1: Muddle mint leaves with lime juice in a pitcher. Step 2: Extract fresh watermelon juice and strain. Step 3: Mix the juice with the muddled mint and a pinch of black salt. Step 4: Serve over ice cubes Garnish with a sprig of mint.'
    },
    {
      id: 'strawberry-milkshake-premium',
      name: 'Gourmet Strawberry Milkshake',
      description: 'Thick and indulgent milkshake made with hand-picked strawberries and premium dairy, finished with whipped cream and a cherry.',
      price: '₹219',
      image: '/assets/images/menu-1.png',
      rating: 4.8,
      tags: 'Drinks • Dessert',
      ingredients: [
        { qty: '1 cup', name: 'Fresh Strawberries' },
        { qty: '2 scoops', name: 'Strawberry Ice Cream' },
        { qty: '1/2 cup', name: 'Whole Milk' }
      ],
      instructions: 'Step 1: Blend strawberries, ice cream, and milk until smooth. Step 2: Drizzle strawberry syrup in the glass. Step 3: Pour the shake and top with whipped cream. Step 4: Garnish with a fresh strawberry.'
    },
    {
      id: 'strawberry-basil-lemonade-fresh',
      name: 'Strawberry Basil Lemonade',
      description: 'A sophisticated twist on lemonade, featuring muddled strawberries and aromatic basil for a perfect balance of sweet and savory.',
      price: '₹179',
      image: '/assets/images/menu-2.png',
      rating: 4.9,
      tags: 'Drinks • Refreshing',
      ingredients: [
        { qty: '1/2 cup', name: 'Strawberries' },
        { qty: '3', name: 'Basil Leaves' },
        { qty: '1 cup', name: 'Fresh Lemonade' }
      ],
      instructions: 'Step 1: Muddle strawberries and basil. Step 2: Pour in lemonade. Step 3: Shake with ice. Step 4: Garnish with a whole strawberry.'
    },
    {
      id: 'blue-lagoon-mocktail-chilled',
      name: 'Blue Lagoon Mocktail',
      description: 'A vibrant blue tropical drink with citrus notes and sparkling soda, perfect for a sunny afternoon.',
      price: '₹199',
      image: '/assets/images/menu-3.png',
      rating: 4.7,
      tags: 'Drinks • Mocktail',
      ingredients: [
        { qty: '30ml', name: 'Blue Curacao Syrup' },
        { qty: '1 cup', name: 'Sprite/Soda' },
        { qty: '1 tbsp', name: 'Lemon Juice' }
      ],
      instructions: 'Step 1: Pour syrup into glass. Step 2: Add lemon juice and ice. Step 3: Top with sparkling soda. Step 4: Stir gently.'
    },
    {
      id: 'matcha-latte-iced-premium',
      name: 'Iced Matcha Latte',
      description: 'Premium ceremonial grade matcha whisked with creamy milk and a touch of agave, served over ice.',
      price: '₹289',
      image: '/assets/images/menu-4.png',
      rating: 4.9,
      tags: 'Drinks • Healthy',
      ingredients: [
        { qty: '1 tsp', name: 'Matcha Powder' },
        { qty: '1 cup', name: 'Almond Milk' },
        { qty: '1 tsp', name: 'Agave Syrup' }
      ],
      instructions: 'Step 1: Whisk matcha with warm water. Step 2: Add agave. Step 3: Pour over ice and milk. Step 4: Stir until green.'
    },
    {
      id: 'peach-iced-tea-classic',
      name: 'Classic Peach Iced Tea',
      description: 'Freshly brewed black tea infused with the sweet essence of sun-ripened peaches.',
      price: '₹159',
      image: '/assets/images/menu-5.png',
      rating: 4.8,
      tags: 'Drinks • Tea',
      ingredients: [
        { qty: '1', name: 'Tea Bag' },
        { qty: '2 tbsp', name: 'Peach Puree' },
        { qty: '1 slice', name: 'Lemon' }
      ],
      instructions: 'Step 1: Brew tea and let it cool. Step 2: Mix with peach puree. Step 3: Pour into a glass filled with ice. Step 4: Garnish with lemon.'
    },
    {
      id: 'masala-chai-authentic-indian',
      name: 'Authentic Masala Chai',
      description: 'Spiced Indian tea brewed with ginger, cardamom, cinnamon, and loose-leaf black tea.',
      price: '₹99',
      image: '/assets/images/menu-6.png',
      rating: 5.0,
      tags: 'Drinks • Indian',
      ingredients: [
        { qty: '1 tbsp', name: 'Tea Leaves' },
        { qty: '1 cup', name: 'Milk & Water' },
        { qty: '1 tsp', name: 'Spices' }
      ],
      instructions: 'Step 1: Boil water with crushed spices and ginger. Step 2: Add tea leaves and simmer. Step 3: Add milk and bring to boil. Step 4: Strain and serve.'
    },
    {
      id: 'hot-chocolate-marshmallow-rich',
      name: 'Rich Hot Chocolate',
      description: 'Velvety dark chocolate melted into whole milk, topped with toasted marshmallows and cocoa powder.',
      price: '₹249',
      image: '/assets/images/menu-1.png',
      rating: 4.9,
      tags: 'Drinks • Comfort',
      ingredients: [
        { qty: '50g', name: 'Dark Chocolate' },
        { qty: '1 cup', name: 'Whole Milk' },
        { qty: 'Handful', name: 'Marshmallows' }
      ],
      instructions: 'Step 1: Heat milk in a pot. Step 2: Whisk in chocolate until melted. Step 3: Pour into a mug. Step 4: Top with marshmallows and torch lightly.'
    },
    {
      id: 'tender-coconut-water-fresh',
      name: 'Fresh Coconut Water',
      description: 'Nature’s own electrolyte drink, served chilled directly from a tender coconut.',
      price: '₹119',
      image: '/assets/images/menu-2.png',
      rating: 4.8,
      tags: 'Drinks • Healthy',
      ingredients: [
        { qty: '1', name: 'Tender Coconut' }
      ],
      instructions: 'Step 1: Open the coconut. Step 2: Pour water into a glass or serve in shell. Step 3: Chill with ice if desired.'
    },
    {
      id: 'apple-ginger-detox-juice',
      name: 'Apple & Ginger Detox',
      description: 'A zingy blend of fresh green apples, spicy ginger, and a splash of lemon for a morning boost.',
      price: '₹169',
      image: '/assets/images/menu-3.png',
      rating: 4.7,
      tags: 'Drinks • Healthy',
      ingredients: [
        { qty: '2', name: 'Green Apples' },
        { qty: '1 inch', name: 'Ginger' },
        { qty: '1/2', name: 'Lemon' }
      ],
      instructions: 'Step 1: Juice apples and ginger. Step 2: Squeeze lemon. Step 3: Stir and serve chilled.'
    },
    {
      id: 'lavender-blueberry-spritzer',
      name: 'Lavender Blueberry Spritzer',
      description: 'A floral and fruity sparkling drink made with dried lavender buds and fresh blueberry reduction.',
      price: '₹219',
      image: '/assets/images/menu-4.png',
      rating: 4.9,
      tags: 'Drinks • Sparkling',
      ingredients: [
        { qty: '2 tbsp', name: 'Blueberry Syrup' },
        { qty: '1/4 tsp', name: 'Lavender Essence' },
        { qty: '1 cup', name: 'Soda' }
      ],
      instructions: 'Step 1: Mix syrup and essence. Step 2: Add ice. Step 3: Top with soda. Step 4: Garnish with lavender sprig.'
    },
    {
      id: 'rose-milk-falooda-premium',
      name: 'Royal Rose Milk',
      description: 'Sweet pink milk infused with rose syrup and soaked basil seeds, a traditional cooling beverage.',
      price: '₹149',
      image: '/assets/images/menu-5.png',
      rating: 4.8,
      tags: 'Drinks • Indian',
      ingredients: [
        { qty: '1 cup', name: 'Milk' },
        { qty: '2 tbsp', name: 'Rose Syrup' },
        { qty: '1 tsp', name: 'Sabja Seeds' }
      ],
      instructions: 'Step 1: Soak seeds for 15 mins. Step 2: Mix milk and syrup. Step 3: Add seeds and ice. Step 4: Stir and serve.'
    },
    {
      id: 'cucumber-lime-detox-water',
      name: 'Cucumber Lime Detox',
      description: 'Infused water with fresh cucumber slices and lime, perfect for hydration during meals.',
      price: '₹89',
      image: '/assets/images/menu-6.png',
      rating: 4.5,
      tags: 'Drinks • Healthy',
      ingredients: [
        { qty: '1/2', name: 'Cucumber' },
        { qty: '1', name: 'Lime' },
        { qty: '1 liter', name: 'Water' }
      ],
      instructions: 'Step 1: Slice cucumber and lime. Step 2: Add to water. Step 3: Let infuse for 1 hour. Step 4: Serve chilled.'
    },
    {
      id: 'passion-fruit-sparkler-tropical',
      name: 'Passion Fruit Sparkler',
      description: 'Tangy passion fruit pulp mixed with mint and sparkling water for a tropical refreshing experience.',
      price: '₹239',
      image: '/assets/images/menu-1.png',
      rating: 4.9,
      tags: 'Drinks • Tropical',
      ingredients: [
        { qty: '1', name: 'Passion Fruit' },
        { qty: '1 cup', name: 'Sparkling Water' }
      ],
      instructions: 'Step 1: Scoop fruit pulp. Step 2: Mix with ice and mint. Step 3: Top with sparkling water. Step 4: Serve immediately.'
    },
    {
      id: 'fresh-orange-pomegranate-blend',
      name: 'Orange Pomegranate Juice',
      description: 'A vibrant, vitamin-C packed juice blend of fresh Nagpur oranges and sweet pomegranate seeds.',
      price: '₹189',
      image: '/assets/images/menu-2.png',
      rating: 4.8,
      tags: 'Drinks • Healthy',
      ingredients: [
        { qty: '2', name: 'Oranges' },
        { qty: '1/2 cup', name: 'Pomegranate Seeds' }
      ],
      instructions: 'Step 1: Juice oranges and seeds separately. Step 2: Mix together. Step 3: Pour over ice. Step 4: Serve fresh.'
    },
    {
      id: 'iced-caramel-macchiato-coffee',
      name: 'Iced Caramel Macchiato',
      description: 'Layers of rich espresso, chilled milk, and sweet caramel syrup, topped with foam.',
      price: '₹269',
      image: '/assets/images/menu-3.png',
      rating: 4.9,
      tags: 'Drinks • Coffee',
      ingredients: [
        { qty: '2 shots', name: 'Espresso' },
        { qty: '1 cup', name: 'Milk' },
        { qty: '2 tbsp', name: 'Caramel Syrup' }
      ],
      instructions: 'Step 1: Pour syrup and milk into glass. Step 2: Add ice. Step 3: Layer espresso on top. Step 4: Drizzle with extra caramel.'
    },
    {
      id: 'mint-lime-mojito-classic',
      name: 'Classic Virgin Mojito',
      description: 'A non-alcoholic classic: muddled mint leaves, lime juice, and sugar topped with sparkling soda.',
      price: '₹169',
      image: '/assets/images/menu-4.png',
      rating: 4.8,
      tags: 'Drinks • Mocktail',
      ingredients: [
        { qty: 'Handful', name: 'Mint' },
        { qty: '2', name: 'Limes' },
        { qty: '1 cup', name: 'Soda' }
      ],
      instructions: 'Step 1: Muddle mint, lime, and sugar. Step 2: Fill glass with ice. Step 3: Top with soda. Step 4: Stir and garnish.'
    }
  ],
  beef: [
    {
      id: 'algerian-kefta',
      name: 'Algerian Kefta (Meatballs)',
      description: 'Lush meatballs simmered in a spiced tomato gravy with fragrant herbs.',
      price: '₹349',
      image: '/assets/images/menu-5.png',
      rating: 5.0,
      tags: 'Beef • Algerian',
      ingredients: [
        { qty: '1 lb', name: 'Ground Beef' },
        { qty: '4 Cloves Crushed', name: 'Garlic' },
        { qty: '1/2 cup', name: 'Onion' },
        { qty: 'To taste', name: 'Salt' },
        { qty: 'To taste', name: 'Pepper' },
        { qty: '3', name: 'Plum Tomatoes' },
        { qty: '1 tsp', name: 'Parsley' },
        { qty: '1/2 cup', name: 'Water' }
      ],
      instructions: 'Combine ground beef with 1/2 of the minced garlic and 1 tablespoon chopped onion in a large bowl. Mix with your hands until fully incorporated. Shape meat mixture into 1 1/2-inch oblong patties; you should have 12 to 14 meatballs. Heat a large skillet over medium-high heat. Brown patties in batches in the hot skillet until crispy on both sides and no longer pink in the center, about 10 minutes. Set meatballs aside in a rimmed serving dish. Reduce heat to medium and stir remaining chopped onion into drippings in the skillet. Season with salt and pepper. Cook, stirring constantly, until onion has softened and turned translucent, about 5 minutes. Stir in remaining garlic and cook for 30 seconds. Stir in Roma tomatoes, dried parsley, and ras el hanout. Pour in water. Cook until tomatoes are soft, about 5 minutes. Pour tomato sauce over meatballs to serve.'
    },
    {
      id: 'arepa-pelua',
      name: 'Arepa pelua',
      description: 'Corn pockets stuffed with shredded beef and melted yellow cheese.',
      price: '₹229',
      image: '/assets/images/menu-6.png',
      rating: 4.7,
      tags: 'Beef • Venezuelan',
      ingredients: [
        { qty: '2 cups', name: 'Corn Flour' },
        { qty: '2 cups', name: 'Shredded Beef' },
        { qty: '1 cup', name: 'Gouda Cheese' },
        { qty: '1/2', name: 'Onion' }
      ],
      instructions: 'Prepare corn dough and shape into flat discs. Griddle until golden. Shred beef and cook with onions and spices. Stuff cheesy beef into sliced arepas.'
    },
    {
      id: 'aussie-burgers',
      name: 'Aussie Burgers',
      description: 'Classic beef burgers topped with egg, beet, and a flavorful patty.',
      price: '₹289',
      image: '/assets/images/menu-1.png',
      rating: 4.6,
      tags: 'Beef • Australian',
      ingredients: [
        { qty: '1', name: 'Beef Patty' },
        { qty: '1', name: 'Burger Bun' },
        { qty: '1', name: 'Fried Egg' },
        { qty: '2 slices', name: 'Sliced Beetroot' },
        { qty: '1 slice', name: 'Cheese' }
      ],
      instructions: 'Grill beef patty to liking. Fry an egg. Toast bun. Assemble with beet, lettuce, tomato, cheese and the fried egg on top.'
    },
    {
      id: 'beef-mustard-pie',
      name: 'Beef and Mustard Pie',
      description: 'Savory steak pie with a bold mustard kick and a golden flaky crust.',
      price: '₹319',
      image: '/assets/images/menu-2.png',
      rating: 4.8,
      tags: 'Beef • English',
      ingredients: [
        { qty: '500g', name: 'Beef Chuck' },
        { qty: '2 tbsp', name: 'Dijon Mustard' },
        { qty: '1 sheet', name: 'Puff Pastry' },
        { qty: '1', name: 'Beef Stock Cube' }
      ],
      instructions: 'Brown beef with onions. Add mustard and stock. Simmer until tender. Cover with pastry and bake until golden brown.'
    },
    {
      id: 'beef-asado',
      name: 'Beef Asado',
      description: 'Slow-roasted beef ribs marinated in aromatic spices and citrus.',
      price: '₹449',
      image: '/assets/images/menu-3.png',
      rating: 4.9,
      tags: 'Beef • Filipino',
      ingredients: [
        { qty: '1 kg', name: 'Beef Ribs' },
        { qty: '1/4 cup', name: 'Soy Sauce' },
        { qty: '2 tbsp', name: 'Calamansi Juice' },
        { qty: '3', name: 'Star Anise' }
      ],
      instructions: 'Marinate beef in soy sauce and calamansi juice. Slow cook with spices until the sauce thickens and beef is tender.'
    },
    {
      id: 'arepa-pabellon',
      name: 'Arepa Pabellón',
      description: 'Traditional Venezuelan arepa with shredded beef, black beans, and plantains.',
      price: '₹259',
      image: '/assets/images/menu-4.png',
      rating: 4.7,
      tags: 'Beef • Venezuelan',
      ingredients: [
        { qty: '1', name: 'Corn Arepa' },
        { qty: '1/2 cup', name: 'Shredded Beef' },
        { qty: '1/4 cup', name: 'Black Beans' },
        { qty: '3 slices', name: 'Fried Plantains' }
      ],
      instructions: 'Cook beef, beans and plantains separately. Stuff into a freshly grilled arepa for a complete traditional meal.'
    },
    {
      id: 'asado-classic',
      name: 'Asado',
      description: 'Authentic South American grilled beef, smoky and tender.',
      price: '₹489',
      image: '/assets/images/menu-5.png',
      rating: 4.8,
      tags: 'Beef • Argentinian',
      ingredients: [
        { qty: '800g', name: 'Beef Flank' },
        { qty: '3 tbsp', name: 'Chimichurri' },
        { qty: 'To taste', name: 'Sea Salt' }
      ],
      instructions: 'Salt the beef generously. Grill over wood fire or charcoal at medium heat. Slice across the grain and serve with fresh chimichurri.'
    },
    {
      id: 'beef-broccoli-stir-fry',
      name: 'Beef and Broccoli Stir-Fry',
      description: 'Thinly sliced beef with fresh broccoli in a savory ginger-garlic soy sauce.',
      price: '₹329',
      image: '/assets/images/menu-6.png',
      rating: 4.5,
      tags: 'Beef • Chinese',
      ingredients: [
        { qty: '300g', name: 'Sliced Flank Steak' },
        { qty: '2 cups', name: 'Broccoli Florets' },
        { qty: '2 tbsp', name: 'Soy Sauce' },
        { qty: '1 tbsp', name: 'Ginger' }
      ],
      instructions: 'Marinate beef in soy sauce. Flash fry beef at high heat. Remove. Stir fry broccoli and ginger. Toss together with sauce.'
    },
    {
      id: 'beef-oyster-pie',
      name: 'Beef and Oyster pie',
      description: 'A Victorian-era classic pairing rich steak with briny oysters in a savory pie.',
      price: '₹379',
      image: '/assets/images/menu-1.png',
      rating: 4.6,
      tags: 'Beef • Traditional',
      ingredients: [
        { qty: '500g', name: 'Diced Beef' },
        { qty: '6', name: 'Fresh Oysters' },
        { qty: '1 cup', name: 'Beef Gravy' },
        { qty: '1 sheet', name: 'Shortcrust Pastry' }
      ],
      instructions: 'Slow cook beef in gravy. Add raw oysters just before covering with pastry. Bake until pastry is rise and golden.'
    },
    {
      id: 'beef-banh-mi-bowls',
      name: 'Beef Banh Mi Bowls',
      description: 'Vietnamese-inspired bowls with sriracha mayo, carrots, and pickled cucumber.',
      price: '₹359',
      image: '/assets/images/menu-2.png',
      rating: 4.7,
      tags: 'Beef • Vietnamese',
      ingredients: [
        { qty: '300g', name: 'Ground Beef' },
        { qty: '2 tbsp', name: 'Sriracha Mayo' },
        { qty: '1/2 cup', name: 'Pickled Carrots' },
        { qty: '1 cup', name: 'Rice' }
      ],
      instructions: 'Cook beef with lemongrass and ginger. Assemble bowls with steamed rice, pickled veggies, herbs, and a drizzle of sriracha mayo.'
    }
  ],
  chicken: [
    {
      id: '15-minute-chicken-halloumi-burgers',
      name: '15-minute chicken & halloumi burgers',
      description: 'Juicy chicken breasts bashed thin and fried in chilli sauce, served with golden brown halloumi, fresh cabbage, and creamy mayo in toasted buns.',
      price: '₹329',
      image: '/assets/images/menu-3.png',
      rating: 5.0,
      tags: 'Chicken • American',
      ingredients: [
        { qty: '2', name: 'Chicken Breasts' },
        { qty: '1 tbsp', name: 'Oil' },
        { qty: '4 tbsp', name: 'Hotsauce' },
        { qty: '1/2', name: 'Lemon Juice' },
        { qty: '2', name: 'Buns' },
        { qty: '250g', name: 'Cheese' },
        { qty: '1/4', name: 'Cabbage' },
        { qty: '2 tbsp', name: 'Mayonnaise' },
        { qty: '4 tbsp', name: 'Sour Cream' },
        { qty: '4 leaves', name: 'Lettuce' },
        { qty: '2', name: 'Red Pepper' },
        { qty: 'To taste', name: 'Black Pepper' }
      ],
      instructions: 'STEP 1: Bash chicken breasts until 1cm thick and cut into even pieces. STEP 2: Heat oil in a pan and fry chicken for 3-4 mins per side. Drizzle with hotsauce and lemon juice, cooking for 1-2 mins more. STEP 3: Toast buns in a dry pan. Cook halloumi until golden brown (about 8-10 mins). STEP 4: Toss cabbage with mayo and lemon juice. STEP 5: Assemble burgers with lettuce, chicken, halloumi, pepper, and extra sauce. Serve with pepper seasoning.'
    },
    {
      id: 'brown-stew-chicken',
      name: 'Brown Stew Chicken',
      description: 'Classic Caribbean dish known for its rich, savory gravy and tender, caramelized chicken pieces.',
      price: '₹389',
      image: '/assets/images/menu-4.png',
      rating: 4.9,
      tags: 'Chicken • Jamaican',
      ingredients: [
        { qty: '1 kg', name: 'Chicken Thighs' },
        { qty: '2 tbsp', name: 'Browning Sauce' },
        { qty: '1', name: 'Scotch Bonnet' },
        { qty: '4', name: 'Scallions' },
        { qty: '3 cloves', name: 'Garlic' },
        { qty: '1 tbsp', name: 'Ginger' },
        { qty: '2', name: 'Carrots' },
        { qty: '1/4 cup', name: 'Ketchup' }
      ],
      instructions: 'Marinate chicken with garlic, ginger, and browning sauce. Brown chicken in a pot, remove. Sauté scallions and peppers. Return chicken, add ketchup and scotch bonnet. Simmer until tender and sauce thickens.'
    },
    {
      id: 'chicken-chorizo-rice-pot',
      name: 'Chicken & chorizo rice pot',
      description: 'A vibrant one-pot meal blending smoky Spanish chorizo with tender chicken and fluffy aromatic rice.',
      price: '₹369',
      image: '/assets/images/menu-5.png',
      rating: 4.8,
      tags: 'Chicken • Spanish',
      ingredients: [
        { qty: '500g', name: 'Chicken Breast' },
        { qty: '100g', name: 'Chorizo Slices' },
        { qty: '1 cup', name: 'Basmati Rice' },
        { qty: '1', name: 'Red Pepper' },
        { qty: '2 cups', name: 'Chicken Stock' },
        { qty: '1 tsp', name: 'Smoked Paprika' }
      ],
      instructions: 'Fry chorizo until oil releases. Add chicken and brown. Stir in rice and paprika, then pour stock. Cover and simmer until rice is tender and liquid absorbed.'
    },
    {
      id: 'chicken-alfredo-primavera',
      name: 'Chicken Alfredo Primavera',
      description: 'Creamy Alfredo sauce paired with sautéed chicken and a medley of fresh spring vegetables.',
      price: '₹349',
      image: '/assets/images/menu-6.png',
      rating: 4.7,
      tags: 'Chicken • Italian',
      ingredients: [
        { qty: '300g', name: 'Fettuccine' },
        { qty: '2', name: 'Chicken Breasts' },
        { qty: '1 cup', name: 'Heavy Cream' },
        { qty: '1/2 cup', name: 'Parmesan' },
        { qty: '1 cup', name: 'Broccoli' },
        { qty: '1', name: 'Zucchini' }
      ],
      instructions: 'Cook pasta in salted water. Sauté chicken and veggies until tender. Simmer cream and parmesan to make sauce. Toss everything together and serve hot.'
    },
    {
      id: 'chicken-congee',
      name: 'Chicken Congee',
      description: 'Silky rice porridge simmered with ginger and chicken for a comforting, warming meal.',
      price: '₹249',
      image: '/assets/images/menu-1.png',
      rating: 4.9,
      tags: 'Chicken • Chinese',
      ingredients: [
        { qty: '1 cup', name: 'Jasmine Rice' },
        { qty: '1.5 L', name: 'Chicken Stock' },
        { qty: '200g', name: 'Shredded Chicken' },
        { qty: '1 tbsp', name: 'Minced Ginger' },
        { qty: '2', name: 'Green Onions' },
        { qty: '1 tsp', name: 'Sesame Oil' }
      ],
      instructions: 'Simmer rice with ginger and stock until broken down and silky. Stir in shredded chicken. Garnish with scallions and sesame oil.'
    },
    {
      id: 'ayam-percik',
      name: 'Ayam Percik',
      description: 'Malaysian grilled chicken basted in a rich, spicy coconut milk sauce infused with lemongrass.',
      price: '₹419',
      image: '/assets/images/menu-2.png',
      rating: 4.8,
      tags: 'Chicken • Malaysian',
      ingredients: [
        { qty: '1', name: 'Whole Chicken' },
        { qty: '2 cups', name: 'Coconut Milk' },
        { qty: '3 sticks', name: 'Lemongrass' },
        { qty: '5', name: 'Shallots' },
        { qty: '2 tbsp', name: 'Tamarind Paste' },
        { qty: '3 tbsp', name: 'Chili Paste' }
      ],
      instructions: 'Marinate chicken with turmeric and salt. Blend spices and simmer with coconut milk. Grill chicken, basting frequently with the spicy coconut sauce.'
    },
    {
      id: 'chick-fil-a-sandwich',
      name: 'Chick-Fil-A Sandwich',
      description: 'A crispy chicken breast brined in pickle juice, served on a toasted bun with signature pickles.',
      price: '₹299',
      image: '/assets/images/menu-3.png',
      rating: 4.7,
      tags: 'Chicken • American',
      ingredients: [
        { qty: '2', name: 'Chicken Breasts' },
        { qty: '1/2 cup', name: 'Pickle Juice' },
        { qty: '1/4 cup', name: 'Milk' },
        { qty: '1 cup', name: 'Flour' },
        { qty: '2', name: 'Brioche Buns' },
        { qty: '4 slices', name: 'Dill Pickles' }
      ],
      instructions: 'Brine chicken in pickle juice and milk. Bread with seasoned flour and sugar. Deep fry until crispy. Serve on toasted buns with pickles.'
    },
    {
      id: 'chicken-mushroom-hotpot',
      name: 'Chicken & mushroom Hotpot',
      description: 'Tender chicken and earthy mushrooms in a creamy sauce, topped with golden crispy potato slices.',
      price: '₹379',
      image: '/assets/images/menu-4.png',
      rating: 4.9,
      tags: 'Chicken • British',
      ingredients: [
        { qty: '500g', name: 'Chicken Diced' },
        { qty: '250g', name: 'White Mushrooms' },
        { qty: '1', name: 'Onion' },
        { qty: '2', name: 'Large Potatoes' },
        { qty: '1 cup', name: 'Chicken Broth' },
        { qty: '1/2 cup', name: 'Cream' }
      ],
      instructions: 'Sauté chicken, mushrooms and onions. Add broth and cream. Transfer to dish, top with sliced potatoes. Bake until potatoes are golden and tender.'
    },
    {
      id: 'chicken-basquaise',
      name: 'Chicken Basquaise',
      description: 'A rustic French stew of chicken, bell peppers, and tomatoes seasoned with Espelette pepper.',
      price: '₹399',
      image: '/assets/images/menu-5.png',
      rating: 4.8,
      tags: 'Chicken • French',
      ingredients: [
        { qty: '4', name: 'Chicken Legs' },
        { qty: '3', name: 'Bell Peppers' },
        { qty: '1 can', name: 'Diced Tomatoes' },
        { qty: '1/2 cup', name: 'White Wine' },
        { qty: '1 tsp', name: 'Piment Espelette' }
      ],
      instructions: 'Brown chicken legs in olive oil. Add peppers and onions. Deglaze with wine, add tomatoes and spice. Simmer until chicken is fall-off-the-bone tender.'
    },
    {
      id: 'chicken-couscous',
      name: 'Chicken Couscous',
      description: 'Fragrant Moroccan-inspired dish with spiced chicken, chickpeas, and fluffy couscous.',
      price: '₹359',
      image: '/assets/images/menu-6.png',
      rating: 4.9,
      tags: 'Chicken • Moroccan',
      ingredients: [
        { qty: '1 cup', name: 'Couscous' },
        { qty: '2', name: 'Chicken Thighs' },
        { qty: '1/2 cup', name: 'Cooked Chickpeas' },
        { qty: '1 tbsp', name: 'Ras el Hanout' },
        { qty: '1/4 cup', name: 'Dried Apricots' },
        { qty: '1.5 cups', name: 'Stock' }
      ],
      instructions: 'Season chicken with Ras el Hanout and grill. Prepare couscous by soaking in boiling stock. Combine chickpeas and apricots into couscous. Serve chicken on top.'
    }
  ],
  dessert: [
    {
      id: 'aebleskiver',
      name: 'Æbleskiver',
      description: 'Traditional Danish pancake spheres, fluffy on the inside and crisp on the outside, served with jam and powdered sugar.',
      price: '₹249',
      image: '/assets/images/menu-1.png',
      rating: 5.0,
      tags: 'Dessert • Norwegian',
      ingredients: [
        { qty: '2 cups', name: 'Flour' },
        { qty: '1 tsp', name: 'Salt' },
        { qty: '2 tbsp', name: 'Granulated Sugar' },
        { qty: '1 tsp', name: 'Baking Powder' },
        { qty: '1/2 tsp', name: 'Cardamom' },
        { qty: '3', name: 'Egg' },
        { qty: '2 cups', name: 'Buttermilk' },
        { qty: 'For Greasing', name: 'Butter' },
        { qty: 'Sprinkling', name: 'Powdered Sugar' },
        { qty: '1 scoop', name: 'Raspberry Jam' }
      ],
      instructions: 'Whisk the flour, salt, sugar, baking soda, and cardamom together in a large bowl. Separate the eggs and add the egg yolks to the flour mixture. Pour in the buttermilk and whisk until smooth. Cover and refrigerate for 30 minutes. Beat egg whites until stiff and fold into batter. Heat pan and fill each hole with batter. Once firm, turn 1/4 using a skewer. Continue turning until round and golden brown. Serve with powdered sugar and jam.'
    },
    {
      id: 'anzac-biscuits',
      name: 'Anzac biscuits',
      description: 'Iconic Australian oat and coconut biscuits, perfectly chewy in the center and golden-crisp on the edges.',
      price: '₹189',
      image: '/assets/images/menu-2.png',
      rating: 4.8,
      tags: 'Dessert • Australian',
      ingredients: [
        { qty: '1 cup', name: 'Rolled Oats' },
        { qty: '1 cup', name: 'Desiccated Coconut' },
        { qty: '1 cup', name: 'Flour' },
        { qty: '1 cup', name: 'Brown Sugar' },
        { qty: '125g', name: 'Butter' },
        { qty: '2 tbsp', name: 'Golden Syrup' },
        { qty: '1 tsp', name: 'Baking Soda' }
      ],
      instructions: 'Melt butter and golden syrup in a pan. Mix baking soda with boiling water and add to butter. Mix dry ingredients and pour in the wet mixture. Roll into balls, flatten on a tray, and bake at 160°C for 15 minutes until golden.'
    },
    {
      id: 'apple-blackberry-crumble',
      name: 'Apple & Blackberry Crumble',
      description: 'A comforting British classic with sweet-tart fruit and a buttery, crisp oat topping.',
      price: '₹279',
      image: '/assets/images/menu-3.png',
      rating: 4.9,
      tags: 'Dessert • British',
      ingredients: [
        { qty: '4', name: 'Granny Smith Apples' },
        { qty: '1 cup', name: 'Blackberries' },
        { qty: '1/2 cup', name: 'Caster Sugar' },
        { qty: '1 cup', name: 'Plain Flour' },
        { qty: '100g', name: 'Cold Butter' },
        { qty: '1/2 cup', name: 'Oats' }
      ],
      instructions: 'Peel and slice apples, toss with blackberries and sugar in a dish. Rub butter into flour and oats until crumbly. Spread over fruit and bake at 180°C for 35-40 minutes until golden and bubbling.'
    },
    {
      id: 'apple-frangipan-tart',
      name: 'Apple Frangipan Tart',
      description: 'An elegant French tart featuring a delicate almond cream filling and thin slices of apple.',
      price: '₹329',
      image: '/assets/images/menu-4.png',
      rating: 4.8,
      tags: 'Dessert • French',
      ingredients: [
        { qty: '1', name: 'Shortcrust Pastry' },
        { qty: '100g', name: 'Ground Almonds' },
        { qty: '100g', name: 'Caster Sugar' },
        { qty: '100g', name: 'Butter' },
        { qty: '2', name: 'Eggs' },
        { qty: '3', name: 'Apples' }
      ],
      instructions: 'Line a tart tin with pastry and blind bake. Cream butter and sugar, then mix in eggs and ground almonds. Spread frangipane over pastry, arrange thin apple slices on top, and bake for 30 minutes at 180°C.'
    },
    {
      id: 'norwegian-kransekake',
      name: 'Authentic Norwegian Kransekake',
      description: 'A striking tower of chewy almond cookie rings, traditionally served at Norwegian celebrations.',
      price: '₹449',
      image: '/assets/images/menu-5.png',
      rating: 5.0,
      tags: 'Dessert • Norwegian',
      ingredients: [
        { qty: '500g', name: 'Ground Almonds' },
        { qty: '500g', name: 'Icing Sugar' },
        { qty: '4', name: 'Egg Whites' },
        { qty: '1 tsp', name: 'Almond Extract' }
      ],
      instructions: 'Knead ground almonds, icing sugar and egg whites into a firm dough. Roll into ropes and place in ring molds. Bake at 200°C for 10-12 minutes. Stack rings using royal icing to form a pyramid.'
    },
    {
      id: 'alfajores',
      name: 'Alfajores',
      description: 'Soft, melt-in-the-mouth Argentine cookies sandwiched with rich dulce de leche.',
      price: '₹229',
      image: '/assets/images/menu-6.png',
      rating: 4.9,
      tags: 'Dessert • Argentine',
      ingredients: [
        { qty: '200g', name: 'Cornstarch' },
        { qty: '150g', name: 'Flour' },
        { qty: '150g', name: 'Butter' },
        { qty: '100g', name: 'Sugar' },
        { qty: '3', name: 'Egg Yolks' },
        { qty: '200g', name: 'Dulce de Leche' }
      ],
      instructions: 'Cream butter and sugar, add yolks and dry ingredients. Roll dough, cut into circles and bake at 180°C for 10 mins. Once cool, sandwich with dulce de leche and roll edges in coconut.'
    },
    {
      id: 'apam-balik',
      name: 'Apam balik',
      description: 'A decadent Malaysian turnover pancake with a crunchy peanut and sweet corn filling.',
      price: '₹159',
      image: '/assets/images/menu-1.png',
      rating: 4.7,
      tags: 'Dessert • Malaysian',
      ingredients: [
        { qty: '2 cups', name: 'Flour' },
        { qty: '1/2 cup', name: 'Sugar' },
        { qty: '1 tsp', name: 'Baking Soda' },
        { qty: '1 cup', name: 'Milk' },
        { qty: '1/2 cup', name: 'Crushed Peanuts' },
        { qty: '2 tbsp', name: 'Creamed Corn' }
      ],
      instructions: 'Whisk batter and pour into a thin layer in a hot pan. Once bubbles form, sprinkle with sugar, peanuts and corn. Fold in half and slice into wedges.'
    },
    {
      id: 'apple-cake',
      name: 'Apple cake',
      description: 'A moist, spiced home-style cake loaded with fresh apple chunks and a cinnamon finish.',
      price: '₹269',
      image: '/assets/images/menu-2.png',
      rating: 4.8,
      tags: 'Dessert • German',
      ingredients: [
        { qty: '3', name: 'Large Apples' },
        { qty: '2 cups', name: 'Flour' },
        { qty: '1 cup', name: 'Sugar' },
        { qty: '2', name: 'Eggs' },
        { qty: '1/2 cup', name: 'Cooking Oil' },
        { qty: '1 tbsp', name: 'Cinnamon' }
      ],
      instructions: 'Beat eggs and sugar, add oil and dry ingredients. Fold in chopped apples. Pour into pan and sprinkle with extra cinnamon and sugar. Bake at 180°C for 45 minutes.'
    },
    {
      id: 'apricot-turkish-delight-mess',
      name: 'Apricot & Turkish delight mess',
      description: 'An exotic take on Eton Mess with rose-tinted Turkish delight, fresh apricots and whipped cream.',
      price: '₹289',
      image: '/assets/images/menu-3.png',
      rating: 4.9,
      tags: 'Dessert • Middle Eastern',
      ingredients: [
        { qty: '300ml', name: 'Double Cream' },
        { qty: '6', name: 'Meringue Nests' },
        { qty: '4', name: 'Apricots' },
        { qty: '100g', name: 'Turkish Delight' },
        { qty: '1 tbsp', name: 'Rose Water' }
      ],
      instructions: 'Whip cream with rose water. Crush meringues and fold into cream. Add diced apricots and chopped Turkish delight. Serve chilled in glass bowls.'
    },
    {
      id: 'bakewell-tart',
      name: 'Bakewell tart',
      description: 'A classic English pastry with a layer of jam and a rich almond frangipane topping.',
      price: '₹299',
      image: '/assets/images/menu-4.png',
      rating: 4.8,
      tags: 'Dessert • English',
      ingredients: [
        { qty: '1', name: 'Tart Shell' },
        { qty: '4 tbsp', name: 'Raspberry Jam' },
        { qty: '100g', name: 'Butter' },
        { qty: '100g', name: 'Ground Almonds' },
        { qty: '100g', name: 'Sugar' },
        { qty: '1/4 cup', name: 'Flaked Almonds' }
      ],
      instructions: 'Blind bake pastry shell. Spread jam over the base. Cream butter and sugar, mix in eggs and ground almonds. Spread over jam, sprinkle with flaked almonds and bake until firm.'
    }
  ],
  goat: [
    {
      id: 'jamaican-curry-goat',
      name: 'Jamaican Curry Goat',
      description: 'A rich, bold, and aromatic Caribbean classic made with tender goat meat simmered in authentic Jamaican curry spices.',
      price: '₹489',
      image: '/assets/images/menu-5.png',
      rating: 5.0,
      tags: 'Goat • Jamaican',
      ingredients: [
        { qty: '3 Lbs', name: 'Goat Meat' },
        { qty: '2.5 tbsp', name: 'Jamaican Curry Powder' },
        { qty: '1/2 tsp', name: 'Ground Ginger' },
        { qty: '1/2 tsp', name: 'All-purpose Seasoning' },
        { qty: '1/4 tsp', name: 'Allspice' },
        { qty: '1 chopped', name: 'Onion' },
        { qty: '6 cloves sliced', name: 'Garlic' },
        { qty: '3 sprigs', name: 'Thyme' },
        { qty: '2 tablespoons', name: 'Oil' },
        { qty: '1 1/4 cup', name: 'Water' },
        { qty: '1', name: 'Scotch Bonnet' },
        { qty: '1 large', name: 'Russet Potato' },
        { qty: 'To taste', name: 'Salt' },
        { qty: 'To taste', name: 'Pepper' }
      ],
      instructions: 'Rinse goat meat with vinegar and water. Season goat meat with 1 1/2 tablespoon curry powder, all-purpose seasoning, ground ginger, allspice, onion, garlic cloves, and thyme. Marinate for at least 4 hours or up to overnight. Remove onion and garlic from goat and set aside. Set an electric pressure cooker, like an Instant Pot, on high sauté and add oil. Add goat meat and brown, about 2-3 minutes per side. Remove goat from insert and add 1 tablespoon oil and remaining curry powder and sauté for about 10 seconds. Then add onions and garlic and sauté until softened. About 4 minutes. If the onions look dry, add a little water and continue to sauté. Add goat and water to the pressure cooker and cover the pressure cooker. Cook for 40 minutes on high pressure. Allow to naturally release for 10 minutes, then release the remaining pressure. Once all the pressure has been released, open the pressure cooker. Place on sauté for 10-15 minutes, add potatoes and a whole scotch bonnet pepper. Cook until potatoes have softened. Remove scotch bonnet pepper.'
    },
    {
      id: 'mbuzi-choma',
      name: 'Mbuzi Choma (Roasted Goat)',
      description: 'Slow-roasted goat ribs over an open charcoal flame, perfectly charred and seasoned with traditional East African spices.',
      price: '₹429',
      image: '/assets/images/menu-6.png',
      rating: 4.9,
      tags: 'Goat • East African',
      ingredients: [
        { qty: '1 kg', name: 'Goat Ribs' },
        { qty: '2 tbsp', name: 'Vegetable Oil' },
        { qty: 'To taste', name: 'Salt' },
        { qty: '1 tsp', name: 'Black Pepper' },
        { qty: '2 cloves', name: 'Garlic' },
        { qty: '1 tbsp', name: 'Ginger' },
        { qty: '1', name: 'Lemon' }
      ],
      instructions: 'Season the goat ribs generously with salt, pepper, minced garlic, and ginger. Drizzle with oil and fresh lemon juice. Grill over medium-high heat on a charcoal grill (choma) for 45-60 minutes, turning regularly until the meat is charred and crispy on the outside while remaining juicy and tender on the inside. Serve with kachumbari and ugali.'
    },
    {
      id: 'moroccan-goat-tagine',
      name: 'Moroccan Goat Tagine',
      description: 'An aromatic, slow-cooked masterpiece featuring succulent goat meat, sweet dried apricots, and crunchy toasted almonds in a velvet Ras el Hanout sauce.',
      price: '₹529',
      image: '/assets/images/menu-1.png',
      rating: 4.9,
      tags: 'Goat • Moroccan',
      ingredients: [
        { qty: '1 kg', name: 'Goat Meat (cubed)' },
        { qty: '2 tbsp', name: 'Ras el Hanout' },
        { qty: '1 cup', name: 'Dried Apricots' },
        { qty: '1/2 cup', name: 'Toasted Almonds' },
        { qty: '2', name: 'Red Onions' },
        { qty: '1 stick', name: 'Cinnamon' }
      ],
      instructions: 'Step 1: Toss goat meat with Ras el Hanout and salt. Brown in a heavy-based pot. Step 2: Sauté sliced onions and ginger until soft. Step 3: Add meat back to pot with cinnamon stick and enough water to cover. Simmer very low for 2 hours. Step 4: Add apricots and honey, simmer for another 30 mins until meat is meltingly tender. Step 5: Garnish with toasted almonds and fresh cilantro before serving.'
    },
    {
      id: 'indian-mutton-masala',
      name: 'Indian Mutton Masala (Goat Curry)',
      description: 'A robust and spicy North Indian classic, slow-simmered with browned onions, luscious tomatoes, and a complex blend of hand-ground spices.',
      price: '₹449',
      image: '/assets/images/menu-2.png',
      rating: 4.8,
      tags: 'Goat • Indian',
      ingredients: [
        { qty: '800g', name: 'Goat Meat' },
        { qty: '3 large', name: 'Red Onions' },
        { qty: '2', name: 'Ripe Tomatoes' },
        { qty: '2 tbsp', name: 'Ginger-Garlic Paste' },
        { qty: '1 tsp', name: 'Garam Masala' },
        { qty: '2 tbsp', name: 'Mustard Oil' }
      ],
      instructions: 'Sauté onions until deep golden brown. Add ginger-garlic paste and tomatoes, cooking until oil separates. Stir in the goat meat and brown well. Add spice powders and water. Pressure cook or slow-simmer for 45-60 minutes until meat is tender and the gravy is thick and aromatic. Finish with fresh coriander.'
    },
    {
      id: 'hyderabadi-goat-biryani',
      name: 'Hyderabadi Goat Dum Biryani',
      description: 'The "King of Biryanis": tender marinated goat and aged basmati rice cooked in the traditional "Katchi" style, sealed with dough for a fragrant, flavorful finish.',
      price: '₹589',
      image: '/assets/images/menu-3.png',
      rating: 5.0,
      tags: 'Goat • Royal Indian',
      ingredients: [
        { qty: '1 kg', name: 'Goat Meat' },
        { qty: '500g', name: 'Basmati Rice' },
        { qty: '1 cup', name: 'Fried Onions' },
        { qty: '1 cup', name: 'Mint & Cilantro' },
        { qty: '1/2 tsp', name: 'Saffron' },
        { qty: '50g', name: 'Pure Ghee' }
      ],
      instructions: 'Marinate goat meat in yoghurt and spices for 4 hours. Par-boil basmati rice with whole spices. Layer the marinated meat and rice in a heavy pot, topped with fried onions, mint, and saffron milk. Seal the lid with dough and cook on low heat (Dum) for 45 minutes. Rest for 15 minutes before serving.'
    },
    {
      id: 'goat-birria-tacos',
      name: 'Goat Birria Tacos',
      description: 'Mexican street food at its finest: slow-braised shredded goat meat in a rich guajillo chili broth, served in crispy tortillas with melted mozzarella and a side of consommé.',
      price: '₹349',
      image: '/assets/images/menu-4.png',
      rating: 4.9,
      tags: 'Goat • Mexican',
      ingredients: [
        { qty: '1 kg', name: 'Goat Shoulder' },
        { qty: '4', name: 'Guajillo Chilies' },
        { qty: '2', name: 'Ancho Chilies' },
        { qty: '1 cup', name: 'Mozzarella Cheese' },
        { qty: '1 pack', name: 'Corn Tortillas' }
      ],
      instructions: 'Toast and soak chilies, then blend with spices and vinegar to make a marinade. Slow-cook goat meat with the marinade and beef stock for 4 hours until it shreds easily. Dip tortillas in the oily surface of the broth, griddle until crisp with meat and cheese. Serve with a bowl of the hot consommé for dipping.'
    },
    {
      id: 'roasted-goat-shanks',
      name: 'Roasted Goat Shanks',
      description: 'Elegant slow-roasted goat shanks cooked in a rich reduction of dry red wine, fresh rosemary, and root vegetables until the meat literally falls off the bone.',
      price: '₹649',
      image: '/assets/images/menu-5.png',
      rating: 5.0,
      tags: 'Goat • European',
      ingredients: [
        { qty: '2', name: 'Goat Shanks' },
        { qty: '500ml', name: 'Red Wine' },
        { qty: '2 sprigs', name: 'Fresh Rosemary' },
        { qty: '2', name: 'Carrots' },
        { qty: '1', name: 'Onion' },
        { qty: '3 cloves', name: 'Garlic' }
      ],
      instructions: 'Sear goat shanks in a Dutch oven until browned on all sides. Add chopped vegetables and sauté. Pour in red wine and a little stock. Add herbs and braise in the oven at 150°C for 3.5 hours. Once tender, remove the shanks and reduce the liquid to a thick glaze. Pour over the shanks to serve.'
    },
    {
      id: 'filipino-goat-kaldereta',
      name: 'Filipino Goat Kaldereta',
      description: 'A celebratory Filipino stew of goat meat in a savory tomato and liver spread sauce, enriched with cheese, olives, and bell peppers.',
      price: '₹479',
      image: '/assets/images/menu-6.png',
      rating: 4.7,
      tags: 'Goat • Filipino',
      ingredients: [
        { qty: '800g', name: 'Goat Meat' },
        { qty: '1/2 cup', name: 'Liver Spread' },
        { qty: '1 cup', name: 'Tomato Sauce' },
        { qty: '1/2 cup', name: 'Grated Cheese' },
        { qty: '2', name: 'Bell Peppers' },
        { qty: '1/4 cup', name: 'Green Olives' }
      ],
      instructions: 'Sauté garlic and onions, then add goat meat and brown. Stir in tomato sauce and enough water to simmer until goat is tender. Add liver spread and mix well to thicken. Add potatoes, carrots, and bell peppers. Once veggies are cooked, stir in cheese and olives for a rich, creamy finish.'
    },
    {
      id: 'greek-goat-stew',
      name: 'Katsiki Giahni (Greek Goat Stew)',
      description: 'Traditional Greek village-style goat stew slow-cooked in a light tomato and lemon sauce with aromatic wild oregano and baby potatoes.',
      price: '₹499',
      image: '/assets/images/menu-1.png',
      rating: 4.8,
      tags: 'Goat • Greek',
      ingredients: [
        { qty: '1 kg', name: 'Goat Meat' },
        { qty: '500g', name: 'Baby Potatoes' },
        { qty: '1 can', name: 'Diced Tomatoes' },
        { qty: '1', name: 'Lemon (Juice)' },
        { qty: '1 tbsp', name: 'Dried Oregano' },
        { qty: '1/2 cup', name: 'Olive Oil' }
      ],
      instructions: 'Brown goat meat in olive oil. Add chopped onions and garlic. Stir in tomatoes, oregano, and water. Simmer covered for 1.5 hours. Add baby potatoes and continue cooking until both meat and potatoes are tender. Finish with fresh lemon juice and a drizzle of extra virgin olive oil.'
    },
    {
      id: 'grilled-goat-chops',
      name: 'Grilled Goat Chops',
      description: 'Succulent goat chops marinated in a Mediterranean blend of garlic, rosemary, and lemon, grilled to smoky perfection over an open flame.',
      price: '₹559',
      image: '/assets/images/menu-2.png',
      rating: 4.9,
      tags: 'Goat • Mediterranean',
      ingredients: [
        { qty: '8', name: 'Goat Chops' },
        { qty: '4 cloves', name: 'Garlic' },
        { qty: '2 tbsp', name: 'Fresh Rosemary' },
        { qty: '1/4 cup', name: 'Olive Oil' },
        { qty: '1', name: 'Lemon' }
      ],
      instructions: 'Whisk together minced garlic, chopped rosemary, lemon zest, juice, and olive oil. Marinate the goat chops for at least 2 hours. Grill over high heat for 3-4 minutes per side until charred on the outside and juicy on the inside. Let the meat rest for 5 minutes before serving with a side of tzatziki.'
    }
  ],
  lamb: [
    {
      id: 'adana-kebab',
      name: 'Adana kebab',
      description: 'A spicy Turkish classic made with hand-minced lamb and seasoned with Romano peppers and aromatic spices.',
      price: '₹389',
      image: '/assets/images/menu-3.png',
      rating: 5.0,
      tags: 'Lamb • Turkish',
      ingredients: [
        { qty: '2 large', name: 'Romano Pepper' },
        { qty: '800g', name: 'Lamb Mince' },
        { qty: '3 tablespoons', name: 'Red Pepper Paste' },
        { qty: '1 tablespoon', name: 'Pul Biber' },
        { qty: '3 tablespoons', name: 'Sunflower Oil' }
      ],
      instructions: 'step 1 Finely chop the peppers in a food processor, then tip them in a sieve and press into the sieve so that the peppers release all of their juices. Tip into a bowl along with the mince, red pepper paste, pul biber, 1½ tsp flaky sea salt, and 2 tbsp of the oil. Mix together, kneading well for at least 2-3 mins. If you need to, wet your hands with cold water to prevent the mixture from sticking. The mixture should be sticky when ready. Cover and chill for at least 2 hrs, or up to 12 hrs. step 2 When ready to cook, heat the grill to high or an oven to 220C/200C fan/gas 6. Divide the mixture into 12 equal portions, around 85g each. If you’d like to skewer them, divide into 8 equal portions and roll into balls. Using wet hands, thread the balls onto the end of the skewers, massaging the mixture down the skewers in between the palms of your hands, until evenly distributed. Ensure that the mixture is fully wrapped tightly around the skewers without any exposed metal. Alternatively, lay them on a large baking tray lined with parchment paper if cooking in the oven, or foil if cooking under the grill. Shape into 20cm-long köfte. Wet your fingers with a little cold water and make indents all along the köfte for the traditional shape. step 3 Gently brush each köfte with the remaining 1 tbsp oil and cook under the grill, on the top shelf for 10-12 mins, turning regularly, or cook in the oven for 16-18 mins, until crispy on the outside and juicy in the middle'
    },
    {
      id: 'chorba-hamra-bel-frik',
      name: 'Chorba Hamra bel Frik',
      description: 'A nourishing Algerian soup with tender lamb, smoky green wheat (frik), and a rich tomato-based broth.',
      price: '₹349',
      image: '/assets/images/menu-4.png',
      rating: 4.8,
      tags: 'Lamb • Algerian',
      ingredients: [
        { qty: '250g', name: 'Lamb Cubes' },
        { qty: '1 large', name: 'Onion' },
        { qty: '3 cloves', name: 'Garlic' },
        { qty: '1 cup', name: 'Frik (Cracked Green Wheat)' },
        { qty: '1 can', name: 'Crushed Tomatoes' },
        { qty: '1 tbsp', name: 'Tomato Paste' },
        { qty: 'To taste', name: 'Paprika' },
        { qty: 'To taste', name: 'Ras el Hanout' }
      ],
      instructions: 'Brown the lamb cubes in a large pot. Add chopped onions and garlic, sautéing until soft. Stir in tomato paste, crushed tomatoes, and spices. Pour in water and simmer until lamb is tender. Rinse frik and add to the pot, simmering for another 20 minutes until the soup reaches a rich, thick consistency.'
    },
    {
      id: 'hot-cumin-lamb-wrap',
      name: 'Hot cumin lamb wrap',
      description: 'Zesty cumin-spiced lamb griddled to perfection, served in a warm flatbread with crunchy slaw and spicy mayo.',
      price: '₹299',
      image: '/assets/images/menu-5.png',
      rating: 4.7,
      tags: 'Lamb • Fusion',
      ingredients: [
        { qty: '4', name: 'Lamb Steaks' },
        { qty: '1 tsp', name: 'Ground Cumin' },
        { qty: '400g', name: 'White Cabbage' },
        { qty: '2', name: 'Carrots' },
        { qty: '3 tbsp', name: 'Mayonnaise' },
        { qty: '5', name: 'Peppadew Peppers' }
      ],
      instructions: 'Rub lamb steaks with cumin, oil, and salt. Griddle for 3-4 minutes per side. Whisk sugar and vinegar, toss with sliced cabbage and carrots to make slaw. Blend 3 peppers with mayo. Assemble everything in warm flatbreads, slice the lamb into strips, and drizzle with spicy mayo.'
    },
    {
      id: 'kapsalon',
      name: 'Kapsalon',
      description: 'The ultimate Dutch street food: a layered spectacular of crispy fries, succulent lamb shawarma, and melted cheese.',
      price: '₹379',
      image: '/assets/images/menu-6.png',
      rating: 4.9,
      tags: 'Lamb • Dutch',
      ingredients: [
        { qty: '500g', name: 'French Fries' },
        { qty: '300g', name: 'Lamb Shawarma' },
        { qty: '1 cup', name: 'Gouda Cheese' },
        { qty: '1 cup', name: 'Iceberg Lettuce' },
        { qty: '2 tbsp', name: 'Garlic Sauce' }
      ],
      instructions: 'Bake fries until golden and crispy. Cook lamb shawarma in a pan with spices. Layer fries at the bottom of a dish, top with meat and cheese, then melt under a grill. Add fresh lettuce and toppings after melting. Drizzle with garlic and spicy sauce before serving.'
    },
    {
      id: 'kofta-burgers',
      name: 'Kofta burgers',
      description: 'Juicy Middle Eastern style lamb patties infused with herbs and spices, served on toasted buns with cooling tzatziki.',
      price: '₹329',
      image: '/assets/images/menu-1.png',
      rating: 4.8,
      tags: 'Lamb • Middle Eastern',
      ingredients: [
        { qty: '1 lb', name: 'Ground Lamb' },
        { qty: '1 small', name: 'Grated Onion' },
        { qty: '2 cloves', name: 'Garlic' },
        { qty: '1/2 cup', name: 'Parsley' },
        { qty: '1 tsp', name: 'Cumin' },
        { qty: '1/2 cup', name: 'Tzatziki' }
      ],
      instructions: 'Mix ground lamb with grated onion, minced garlic, herbs, and spices. Shape into flat burger patties. Grill for 3-5 minutes per side until charred and cooked through. Serve on toasted buns with a generous dollop of tzatziki.'
    },
    {
      id: 'chilli-ginger-lamb-chops',
      name: 'Chilli ginger lamb chops',
      description: 'Zesty and spicy lamb chops marinated in fresh ginger and red chilli, grilled for a smoky finish.',
      price: '₹449',
      image: '/assets/images/menu-2.png',
      rating: 4.9,
      tags: 'Lamb • Oriental',
      ingredients: [
        { qty: '8', name: 'Lamb Chops' },
        { qty: '4 cloves', name: 'Garlic' },
        { qty: '1 tbsp', name: 'Fresh Ginger' },
        { qty: '1 tsp', name: 'Chilli Powder' },
        { qty: '1 tbsp', name: 'Lemon Juice' }
      ],
      instructions: 'Combine garlic, ginger, chilli powder, lemon juice, and oil into a paste. Rub thoroughly into the lamb chops and marinate for at least 2 hours. Grill on high heat for 3 minutes per side until the fat is rendered and meat is juicy.'
    },
    {
      id: 'farikal',
      name: 'Fårikål',
      description: 'The national dish of Norway, a rustic and comforting slow-cooked stew of lamb and cabbage with whole peppercorns.',
      price: '₹419',
      image: '/assets/images/menu-3.png',
      rating: 5.0,
      tags: 'Lamb • Norwegian',
      ingredients: [
        { qty: '1.5 kg', name: 'Lamb (with bone)' },
        { qty: '1.5 kg', name: 'Cabbage' },
        { qty: '2 tsp', name: 'Whole Peppercorns' },
        { qty: '400 ml', name: 'Water' }
      ],
      instructions: 'Layer bone-in lamb and thick cabbage wedges in a large pot. Season between layers with salt and plenty of whole peppercorns. Add water, bring to boil, then simmer on low for 2-3 hours until the meat is fall-off-the-bone tender. Serve with boiled potatoes.'
    },
    {
      id: 'imam-bayildi',
      name: 'Imam bayildi with BBQ lamb',
      description: 'Smoky BBQ lamb chops paired with "fainting-good" Turkish stuffed aubergines and refreshing tzatziki.',
      price: '₹489',
      image: '/assets/images/menu-4.png',
      rating: 4.9,
      tags: 'Lamb • Turkish',
      ingredients: [
        { qty: '12', name: 'Lamb Chops' },
        { qty: '3', name: 'Aubergines' },
        { qty: '1', name: 'Onion' },
        { qty: '8', name: 'Ripe Tomatoes' },
        { qty: '150g', name: 'Greek Yogurt' }
      ],
      instructions: 'Roast halved aubergines until soft. Sauté onion and tomatoes, then stuff back into aubergine shells and bake. Season lamb chops with paprika and salt, then BBQ for 3 minutes per side. Serve with homemade tzatziki and fresh parsley.'
    },
    {
      id: 'keleya-zaara',
      name: 'Keleya Zaara',
      description: 'An elegant Tunisian stew of tender lamb cubes slow-cooked in a fragrant saffron and butter sauce.',
      price: '₹469',
      image: '/assets/images/menu-5.png',
      rating: 4.8,
      tags: 'Lamb • Tunisian',
      ingredients: [
        { qty: '1.5 lbs', name: 'Lamb Cubes' },
        { qty: '1.5 tsp', name: 'Saffron' },
        { qty: '1', name: 'Onion' },
        { qty: '1 tbsp', name: 'Butter' },
        { qty: '1/2 cup', name: 'Fresh Parsley' }
      ],
      instructions: 'Brown the lamb cubes in oil. Add diced onions, saffron, salt, and pepper. Pour in water and simmer covered until tender. Stir in cold butter to finish the sauce and garnish with a mountain of fresh parsley and lemon wedges.'
    },
    {
      id: 'lamb-apricot-meatballs',
      name: 'Lamb & apricot meatballs',
      description: 'Sweet and savory Moroccan-inspired lamb meatballs with chopped apricots, simmered in a spiced tomato sauce.',
      price: '₹359',
      image: '/assets/images/menu-6.png',
      rating: 4.7,
      tags: 'Lamb • Moroccan',
      ingredients: [
        { qty: '500g', name: 'Lamb Mince' },
        { qty: '8', name: 'Dried Apricots' },
        { qty: '50g', name: 'Breadcrumbs' },
        { qty: '1 can', name: 'Chopped Tomatoes' },
        { qty: '1 tsp', name: 'Cumin' }
      ],
      instructions: 'Combine lamb, chopped apricots, breadcrumbs, and spices. Roll into small meatballs and brown in a pan. Prepare a quick tomato sauce with cumin and onions, then drop the meatballs in and simmer for 15 minutes. Serve with pita and mint garnish.'
    }
  ],
  miscellaneous: [
    {
      id: 'bean-sausage-hotpot',
      name: 'Bean & Sausage Hotpot',
      description: 'A comforting British classic: juicy sausages and butter beans simmered in a rich tomato sauce with a hint of treacle.',
      price: '₹349',
      image: '/assets/images/menu-1.png',
      rating: 5.0,
      tags: 'Miscellaneous • British',
      ingredients: [
        { qty: '8 large', name: 'Sausages' },
        { qty: '1200g', name: 'Butter Beans' },
        { qty: '1 Jar', name: 'Tomato Sauce' },
        { qty: '1 tbls', name: 'Black Treacle' },
        { qty: '1 tsp', name: 'English Mustard' }
      ],
      instructions: 'In a large casserole, fry the sausages until brown all over — about 10 mins. Add the tomato sauce, stirring well, then stir in the beans, treacle or sugar and mustard. Bring to the simmer, cover and cook for 30 mins. Great served with crusty bread or rice.'
    },
    {
      id: 'chakchouka',
      name: 'Chakchouka',
      description: 'A vibrant Mediterranean dish of eggs poached in a robust, spiced tomato and pepper sauce, topped with fresh herbs.',
      price: '₹289',
      image: '/assets/images/menu-2.png',
      rating: 4.8,
      tags: 'Miscellaneous • Mediterranean',
      ingredients: [
        { qty: '6 large', name: 'Eggs' },
        { qty: '28 oz', name: 'Whole Peeled Tomatoes' },
        { qty: '1 large', name: 'Red Bell Pepper' },
        { qty: '1 large', name: 'Red Onion' },
        { qty: '4 cloves', name: 'Garlic' },
        { qty: '1 tsp', name: 'Smoked Paprika' },
        { qty: '1 tsp', name: 'Cumin' }
      ],
      instructions: 'Sauté onions and peppers until soft. Stir in minced garlic and spices. Add hand-crushed tomatoes and simmer for 20 minutes until thick. Create wells in the sauce and crack an egg into each. Cover and poach for 5-8 minutes until whites are set but yolks are runny. Garnish with feta and parsley.'
    },
    {
      id: 'french-lentils-garlic-thyme',
      name: 'French Lentils with Garlic and Thyme',
      description: 'Earthy "lentilles du Puy" slow-simmered with a classic mirepoix, fresh thyme, and a touch of white wine.',
      price: '₹269',
      image: '/assets/images/menu-3.png',
      rating: 4.7,
      tags: 'Miscellaneous • French',
      ingredients: [
        { qty: '1 cup', name: 'French Green Lentils' },
        { qty: '1/2', name: 'Yellow Onion' },
        { qty: '1 medium', name: 'Carrot' },
        { qty: '1 medium', name: 'Celery Stalk' },
        { qty: '4 sprigs', name: 'Fresh Thyme' },
        { qty: '2 cups', name: 'Vegetable Stock' }
      ],
      instructions: 'Finely dice onion, carrot, and celery. Sweat them slowly in olive oil until translucent. Stir in minced garlic and thyme, then add lentils and stock. Simmer for 20-25 minutes until tender but still holding their shape. Stir in a knob of butter at the end for a luxurious finish.'
    },
    {
      id: 'locro',
      name: 'Locro',
      description: 'A hearty Argentinian national treasure: a thick, velvety stew of hominy, squash, and tender meats.',
      price: '₹429',
      image: '/assets/images/menu-4.png',
      rating: 4.9,
      tags: 'Miscellaneous • Argentinian',
      ingredients: [
        { qty: '2 cups', name: 'White Hominy' },
        { qty: '1 cup', name: 'White Beans' },
        { qty: '1.5 lbs', name: 'Pork Shoulder' },
        { qty: '10 oz', name: 'Chorizo Colorado' },
        { qty: '1 small', name: 'Butternut Squash' }
      ],
      instructions: 'Soak hominy and beans overnight. Brown pork shoulder and sliced chorizo in a heavy pot. Add minced onions and leeks, then combine with soaked grains and cover with stock. Simmer for 2 hours. Add cubed squash and cook until it "melts" into the stew, creating a thick, golden sauce. Serve with Quiquirimichi spiced oil.'
    },
    {
      id: 'mutabbaq',
      name: 'Mutabbaq',
      description: 'A savory-sweet layered spectacular: paper-thin dough folded over a rich filling of spiced lamb and scallions.',
      price: '₹319',
      image: '/assets/images/menu-5.png',
      rating: 4.8,
      tags: 'Miscellaneous • Middle Eastern',
      ingredients: [
        { qty: '300g', name: 'Ground Lamb' },
        { qty: '5 large', name: 'Eggs' },
        { qty: '1 cup', name: 'Green Onions' },
        { qty: '2 medium', name: 'Tomatoes' },
        { qty: '3 cups', name: 'All-purpose Flour' }
      ],
      instructions: 'Knead flour, water, and oil into a soft dough and rest for 2 hours. Sauté minced lamb with cumin and turmeric. Mix cooled meat with beaten eggs and scallions. Stretch dough until transparently thin, place filling in center, and fold into a square envelope. Pan-fry until deep golden brown and crispy.'
    },
    {
      id: 'callaloo-jamaican-style',
      name: 'Callaloo Jamaican Style',
      description: 'Nutrient-rich amaranth greens steamed with vibrant aromatics, scotch bonnet, and a hint of butter.',
      price: '₹249',
      image: '/assets/images/menu-6.png',
      rating: 4.7,
      tags: 'Miscellaneous • Jamaican',
      ingredients: [
        { qty: '1 bundle', name: 'Fresh Callaloo' },
        { qty: '3 cloves', name: 'Garlic' },
        { qty: '3 sprigs', name: 'Fresh Thyme' },
        { qty: '1', name: 'Scotch Bonnet' },
        { qty: '1 tbsp', name: 'Unsalted Butter' }
      ],
      instructions: 'Strip fibrous membranes from callaloo stalks and chop leaves. Sauté onion, garlic, and bell pepper until soft. Fold in the callaloo with fresh thyme and a whole scotch bonnet pepper for infusion. Add butter and a splash of stock, cover tightly, and steam for 5-7 minutes. Remove pepper before serving.'
    },
    {
      id: 'duck-confit',
      name: 'Duck Confit',
      description: 'A masterclass in French technique: duck legs slow-cooked in their own fat until fall-off-the-bone tender.',
      price: '₹549',
      image: '/assets/images/menu-1.png',
      rating: 5.0,
      tags: 'Miscellaneous • French',
      ingredients: [
        { qty: '4 large', name: 'Duck Legs' },
        { qty: '4 cups', name: 'Rendered Duck Fat' },
        { qty: '15 sprigs', name: 'Fresh Thyme' },
        { qty: '1/2 cup', name: 'Kosher Salt' },
        { qty: '2', name: 'Bay Leaves' }
      ],
      instructions: 'Cure duck legs in salt, sugar, and aromatics for 24 hours. Rinse and pat extremely dry. Submerge completely in rendered duck fat and cook at a very low 220°F for 1.5 hours. Let cool in fat to absorb flavors. Before serving, crisp the skin in a hot skillet until golden brown.'
    },
    {
      id: 'french-omelette',
      name: 'French Omelette',
      description: 'Elegant and classic: a smooth, pale omelette with a creamy, barely-set interior and a glossy butter finish.',
      price: '₹259',
      image: '/assets/images/menu-2.png',
      rating: 4.9,
      tags: 'Miscellaneous • French',
      ingredients: [
        { qty: '3 large', name: 'Farm-fresh Eggs' },
        { qty: '1.5 tbsp', name: 'Unsalted Butter' },
        { qty: '1 tsp', name: 'Fresh Chives' },
        { qty: 'To taste', name: 'White Pepper' }
      ],
      instructions: 'Whisk eggs until completely homogenized. Melt butter over medium-low heat without browning. Stir eggs rapidly in a circular motion until tiny curds form. Level into a smooth sheet, let sit for 20 seconds, then roll into a tight cylinder. Finish with a rub of cold butter for a high-gloss sheen.'
    },
    {
      id: 'migas',
      name: 'Migas',
      description: 'A rustic Spanish masterpiece: crispy, paprika-infused bread crumbs tossed with chorizo and sweet green grapes.',
      price: '₹299',
      image: '/assets/images/menu-3.png',
      rating: 4.8,
      tags: 'Miscellaneous • Spanish',
      ingredients: [
        { qty: '400g', name: 'Crusty Sourdough' },
        { qty: '150g', name: 'Spanish Chorizo' },
        { qty: '1 head', name: 'Garlic' },
        { qty: '1 cup', name: 'Green Grapes' },
        { qty: '1 tsp', name: 'Smoked Paprika' }
      ],
      instructions: 'Dampen bread chunks and rest. Fry whole garlic cloves and chorizo until oil is bright red. Remove meat and add bread to the fat, stirring constantly for 20 minutes until toasted and crispy but chewy inside. Stir in paprika and reserved meats. Fold in halved grapes for a sweet-savory contrast.'
    },
    {
      id: 'osso-buco-alla-milanese',
      name: 'Osso Buco alla Milanese',
      description: 'Cross-cut veal shanks braised with white wine and soffritto, topped with vibrant lemon-garlic gremolata.',
      price: '₹529',
      image: '/assets/images/menu-4.png',
      rating: 4.9,
      tags: 'Miscellaneous • Italian',
      ingredients: [
        { qty: '4', name: 'Cross-cut Veal Shanks' },
        { qty: '150ml', name: 'Dry White Wine' },
        { qty: '1', name: 'Lemon (Zest)' },
        { qty: '1 clove', name: 'Garlic (Minced)' },
        { qty: '2 tbsp', name: 'Flat-leaf Parsley' }
      ],
      instructions: 'Tie shanks with twine, season, and sear until deeply golden. Sauté finely minced onion, carrot, and celery. Deglaze with white wine, return shanks, and add stock. Braise on low for 2 hours. Serve topped with fresh gremolata (lemon zest, garlic, and parsley) for a bright, aromatic finish.'
    }
  ],
  pasta: [
    {
      id: 'chilli-prawn-linguine',
      name: 'Chilli prawn linguine',
      description: 'A fragrant and zesty seafood pasta featuring succulent king prawns and sugar snap peas in a lime-infused dressing.',
      price: '₹429',
      image: '/assets/images/menu-5.png',
      rating: 5.0,
      tags: 'Pasta • Italian',
      ingredients: [
        { qty: '280g', name: 'Linguine Pasta' },
        { qty: '200g', name: 'Sugar Snap Peas' },
        { qty: '2 tblsp', name: 'Olive Oil' },
        { qty: '2 cloves chopped', name: 'Garlic Clove' },
        { qty: '1 large', name: 'Red Chilli' },
        { qty: '24 Skinned', name: 'King Prawns' },
        { qty: '12', name: 'Cherry Tomatoes' },
        { qty: 'Handful', name: 'Basil Leaves' },
        { qty: 'Leaves', name: 'Lettuce' },
        { qty: 'to serve', name: 'Bread' },
        { qty: '2 tbsp', name: 'Fromage Frais' },
        { qty: 'Grated Zest of 2', name: 'Lime' },
        { qty: '2 tsp', name: 'Caster Sugar' }
      ],
      instructions: 'Mix the dressing ingredients in a small bowl and season with salt and pepper. Set aside. Cook the pasta according to the packet instructions. Add the sugar snap peas for the last minute or so of cooking time. Meanwhile, heat the oil in a wok or large frying pan, toss in the garlic and chilli and cook over a fairly gentle heat for about 30 seconds without letting the garlic brown. Tip in the prawns and cook over a high heat, stirring frequently, for about 3 minutes until they turn pink. Add the tomatoes and cook, stirring occasionally, for 3 minutes until they just start to soften. Drain the pasta and sugar snaps well, then toss into the prawn mixture. Tear in the basil leaves, stir, and season with salt and pepper. Serve with salad leaves drizzled with the lime dressing, and warm crusty bread.'
    },
    {
      id: 'fettucine-alfredo-creamy',
      name: 'Fettucine alfredo',
      description: 'The luxurious American-style classic featuring silky pasta in a rich, velvety cream and Parmigiano sauce.',
      price: '₹379',
      image: '/assets/images/menu-6.png',
      rating: 4.8,
      tags: 'Pasta • American',
      ingredients: [
        { qty: '400g', name: 'Fresh Egg Fettuccine' },
        { qty: '1 cup', name: 'Heavy Cream' },
        { qty: '100g', name: 'Parmigiano-Reggiano' },
        { qty: '4 tbsp', name: 'European Butter' },
        { qty: '1/4 tsp', name: 'Fresh Nutmeg' }
      ],
      instructions: 'Melt butter in a large skillet over medium-low heat. Stir in heavy cream and simmer gently for 5 minutes. Whisk in finely grated Parmigiano-Reggiano in batches until smooth and thick. Toss in al dente fettuccine with a splash of pasta water. Season with freshly grated nutmeg and black pepper before serving.'
    },
    {
      id: 'lasagna-sandwiches',
      name: 'Lasagna Sandwiches',
      description: 'A creative fusion masterpiece: buttery grilled sourdough encasing rich ragu, creamy ricotta, and molten mozzarella.',
      price: '₹349',
      image: '/assets/images/menu-1.png',
      rating: 4.9,
      tags: 'Pasta • Fusion',
      ingredients: [
        { qty: '8 slices', name: 'Artisan Sourdough' },
        { qty: '1.5 cups', name: 'Thick Meat Ragu' },
        { qty: '1/2 cup', name: 'Ricotta Spread' },
        { qty: '1.5 cups', name: 'Shredded Mozzarella' },
        { qty: '4 tbsp', name: 'Garlic Butter' }
      ],
      instructions: 'Brown meat and simmer with marinara until very thick. Whip ricotta with Parmigiano. Spread garlic butter on outer sides of bread. Layer ricotta, meat sauce, and plenty of mozzarella between slices. Grill on medium-low until bread is golden-brown and the lasagna filling is hot and gooey.'
    },
    {
      id: 'pilchard-puttanesca',
      name: 'Pilchard puttanesca',
      description: 'A bold Mediterranean pasta with wild-caught pilchards, briny olives, and capers, finished with a crispy pangrattato.',
      price: '₹329',
      image: '/assets/images/menu-2.png',
      rating: 4.7,
      tags: 'Pasta • Mediterranean',
      ingredients: [
        { qty: '350g', name: 'Bronze-die Spaghetti' },
        { qty: '400g', name: 'Pilchards in Tomato' },
        { qty: '1/2 cup', name: 'Kalamata Olives' },
        { qty: '2 tbsp', name: 'Salted Capers' },
        { qty: '1/2 cup', name: 'Panko Breadcrumbs' }
      ],
      instructions: 'Toast breadcrumbs with lemon zest and oregano for the pangrattato. Sauté garlic and chilli in olive oil. Stir in crushed tomatoes, olives, and capers and simmer. Gently fold in pilchard chunks. Toss with al dente spaghetti and pasta water. Top with the crispy pangrattato and fresh parsley.'
    },
    {
      id: 'syrian-spaghetti',
      name: 'Syrian Spaghetti',
      description: 'A traditional aromatic baked pasta dish infused with warm cinnamon and allspice, topped with a golden, crispy layer.',
      price: '₹389',
      image: '/assets/images/menu-3.png',
      rating: 4.8,
      tags: 'Pasta • Syrian',
      ingredients: [
        { qty: '1 lb', name: 'Spaghetti' },
        { qty: '1 lb', name: 'Ground Lamb' },
        { qty: '1.5 tsp', name: 'Ground Cinnamon' },
        { qty: '1 tsp', name: 'Ground Allspice' },
        { qty: '2 tbsp', name: 'Pine Nuts' }
      ],
      instructions: 'Caramelize sliced onions and brown the lamb. Stir in cinnamon, allspice, and tomato paste. Deglaze with stock and simmer into a rich sauce. Toss pasta in the sauce and transfer to a baking dish. Bake at 375°F for 25 minutes until the top is slightly crisp. Garnish with toasted pine nuts.'
    },
    {
      id: 'fettuccine-alfredo-roman',
      name: 'Fettuccine Alfredo',
      description: 'The authentic Roman original: an elegant emulsion of high-quality butter and aged Parmigiano-Reggiano.',
      price: '₹399',
      image: '/assets/images/menu-4.png',
      rating: 5.0,
      tags: 'Pasta • Authentic',
      ingredients: [
        { qty: '400g', name: 'Bronze-cut Fettuccine' },
        { qty: '100g', name: 'Parmigiano-Reggiano' },
        { qty: '80g', name: 'Cultured Butter' },
        { qty: '1 cup', name: 'Pasta Water' }
      ],
      instructions: 'Cook fettuccine until barely al dente. Melt cultured butter in a warmed bowl with a splash of pasta water. Add the hot pasta and shower with finely grated Parmigiano. Toss vigorously until the cheese and butter emulsify into a glossy, pale-gold sauce that clings perfectly to every strand.'
    },
    {
      id: 'grilled-mac-cheese-sandwich',
      name: 'Grilled Mac and Cheese Sandwich',
      description: 'The ultimate comfort snack: creamy homemade multi-cheese macaroni between slices of crispy artisan sourdough.',
      price: '₹289',
      image: '/assets/images/menu-5.png',
      rating: 4.9,
      tags: 'Pasta • Comfort',
      ingredients: [
        { qty: '8 oz', name: 'Cavatappi Pasta' },
        { qty: '1.5 cups', name: 'Cheddar & Gruyère Blend' },
        { qty: '4 slices', name: 'Artisan Sourdough' },
        { qty: '4 tbsp', name: 'Softened Butter' },
        { qty: '1/2 tsp', name: 'Dijon Mustard' }
      ],
      instructions: 'Prepare a thick cheese sauce with butter, flour, milk, and cheese. Fold in al dente pasta. Butter sourdough slices and add a slice of "glue" cheese. Scoop mac and cheese onto the bread and top with another slice. Grill low and slow until the interior is gooey and the exterior is golden-brown.'
    },
    {
      id: 'lasagne-bolognese',
      name: 'Lasagne',
      description: 'Classical Lasagne alla Bolognese with rich meat ragu, silky Béchamel, and delicate fresh pasta sheets.',
      price: '₹489',
      image: '/assets/images/menu-6.png',
      rating: 5.0,
      tags: 'Pasta • Italian',
      ingredients: [
        { qty: '1 lb', name: 'Ground Beef & Pork' },
        { qty: '12 sheets', name: 'Fresh Pasta' },
        { qty: '4 cups', name: 'Béchamel Sauce' },
        { qty: '1 cup', name: 'Parmigiano-Reggiano' },
        { qty: '28 oz', name: 'Crushed Tomatoes' }
      ],
      instructions: 'Simmer Bolognese ragu for at least 3 hours. Prepare a smooth Béchamel with butter, flour, and whole milk. Layer ragu, pasta, Béchamel, and cheese in at least 5 layers. Top with extra Béchamel and Parmigiano. Bake until bubbling and browned, then rest for 20 minutes before serving.'
    },
    {
      id: 'spaghetti-alla-carbonara',
      name: 'Spaghetti alla Carbonara',
      description: 'Authentic Roman carbonara made with crispy guanciale, creamy egg yolks, and sharp Pecorino Romano.',
      price: '₹449',
      image: '/assets/images/menu-1.png',
      rating: 4.9,
      tags: 'Pasta • Roman',
      ingredients: [
        { qty: '400g', name: 'Spaghettoni' },
        { qty: '250g', name: 'Guanciale' },
        { qty: '4', name: 'Fresh Egg Yolks' },
        { qty: '100g', name: 'Pecorino Romano' },
        { qty: '1 tbsp', name: 'Black Pepper' }
      ],
      instructions: 'Render sliced guanciale until golden and crispy. Whisk yolks with grated Pecorino and coarse black pepper. Add hot pasta and a splash of cooking water to the guanciale fat. Off heat, pour in the egg mixture and toss vigorously until a thick, velvety sauce emulsifies. Serve immediately.'
    },
    {
      id: 'venetian-duck-ragu',
      name: 'Venetian Duck Ragu',
      description: 'Luxurious braised duck leg ragu with warm Venetian spices, white wine, and fresh rosemary over thick bigoli.',
      price: '₹549',
      image: '/assets/images/menu-2.png',
      rating: 5.0,
      tags: 'Pasta • Venetian',
      ingredients: [
        { qty: '4 large', name: 'Duck Legs' },
        { qty: '300ml', name: 'Dry White Wine' },
        { qty: '1 tsp', name: 'Ground Cinnamon' },
        { qty: '1 tbsp', name: 'Fresh Rosemary' },
        { qty: '500g', name: 'Fresh Bigoli/Pappardelle' }
      ],
      instructions: 'Sear duck legs and render the fat. Sauté mirepoix, then deglaze with white wine. Add cinnamon, rosemary, and stock. Braise duck until it falls off the bone. Shred the meat and return to the reduced sauce. Toss with cooked bigoli and finish with aged Parmigiano-Reggiano.'
    }
  ],
  pork: [
    {
      id: 'bubble-squeak',
      name: 'Bubble & Squeak',
      description: 'A traditional British breakfast hash made with mashed potatoes and cabbage, fried until golden and crispy.',
      price: '₹329',
      image: '/assets/images/menu-3.png',
      rating: 5.0,
      tags: 'Pork • British',
      ingredients: [
        { qty: '1 tbs', name: 'Butter' },
        { qty: '1 chopped', name: 'Garlic Clove' },
        { qty: '4', name: 'Bacon' },
        { qty: '20', name: 'Brussels Sprouts' },
        { qty: '1 finely sliced', name: 'Onion' },
        { qty: '400g', name: 'Potatoes' }
      ],
      instructions: 'Melt the fat in a non-stick pan, allow it to get nice and hot, then add the bacon. As it begins to brown, add the onion and garlic. Next, add the sliced sprouts or cabbage and let it colour slightly. All this will take 5-6 mins. Next, add the potato. Work everything together in the pan and push it down so that the mixture covers the base of the pan — allow the mixture to catch slightly on the base of the pan before turning it over and doing the same again. It\'s the bits of potato that catch in the pan that define the term \'bubble and squeak\', so be brave and let the mixture colour. Cut into wedges and serve.'
    },
    {
      id: 'barbecue-pork-buns',
      name: 'Barbecue pork buns',
      description: 'Pillowy-soft steamed Cantonese buns with a rich, savory-sweet BBQ pork (char siu) filling.',
      price: '₹349',
      image: '/assets/images/menu-4.png',
      rating: 4.8,
      tags: 'Pork • Cantonese',
      ingredients: [
        { qty: '2 cups', name: 'Char Siu (Diced)' },
        { qty: '300g', name: 'Bao Flour' },
        { qty: '1 tbsp', name: 'Oyster Sauce' },
        { qty: '1 tbsp', name: 'Hoisin Sauce' },
        { qty: '1 tsp', name: 'Sesame Oil' }
      ],
      instructions: 'Prepare the filling by sautéing diced BBQ pork with oyster sauce, hoisin, and aromatics until thick and glossy. Chill the filling. Make a soft yeast dough using bao flour and let rest. Divide dough, place chilled filling in center, and pleat to seal. Steam on high heat for 10 minutes. Let rest for 2 minutes before opening the lid to ensure fluffy, non-wrinkled buns.'
    },
    {
      id: 'bigos-hunters-stew',
      name: 'Bigos (Hunters Stew)',
      description: 'The national dish of Poland: a deep, savory stew of sauerkraut, smoked meats, and forest mushrooms.',
      price: '₹489',
      image: '/assets/images/menu-5.png',
      rating: 4.9,
      tags: 'Pork • Polish',
      ingredients: [
        { qty: '1 lb', name: 'Smoked Kielbasa' },
        { qty: '1 lb', name: 'Pork Shoulder' },
        { qty: '1.5 lbs', name: 'Sauerkraut' },
        { qty: '1 oz', name: 'Dried Porcini' },
        { qty: '1 cup', name: 'Dry Red Wine' },
        { qty: '1 cup', name: 'Dried Prunes' }
      ],
      instructions: 'Brown the cubed pork and sliced kielbasa in a large pot. Add shredded fresh cabbage and sauerkraut. Stir in soaked porcini mushrooms, red wine, and traditional spices like juniper and bay leaves. Simmer on very low heat for at least 3 hours. Add prunes in the final hour for a touch of sweetness. For best results, rest overnight and reheat.'
    },
    {
      id: 'bryndzove-halusky',
      name: 'Bryndzové Halušky',
      description: 'Slovakia\'s beloved national dish: potato dumplings with creamy sheep cheese and crispy bacon bits.',
      price: '₹379',
      image: '/assets/images/menu-6.png',
      rating: 4.7,
      tags: 'Pork • Slovak',
      ingredients: [
        { qty: '500g', name: 'Grated Potatoes' },
        { qty: '2 cups', name: 'All-Purpose Flour' },
        { qty: '250g', name: 'Bryndza Cheese' },
        { qty: '200g', name: 'Smoked Bacon' },
        { qty: '1', name: 'Large Egg' }
      ],
      instructions: 'Render diced bacon until crispy, reserving the fat. Grate raw potatoes finely and mix with flour and egg to form a sticky dough. Push small dumplings through a maker into boiling water. Toss the hot dumplings directly into the sheep cheese and bacon fat mixture until creamy. Serve immediately topped with the crispy bacon lardons.'
    },
    {
      id: 'chorizo-spinach-stew',
      name: 'Chickpea, chorizo & spinach stew',
      description: 'A piquant Spanish-style stew with smoky chorizo, tender chickpeas, and fresh wilted baby spinach.',
      price: '₹399',
      image: '/assets/images/menu-1.png',
      rating: 4.8,
      tags: 'Pork • Spanish',
      ingredients: [
        { qty: '8 oz', name: 'Spanish Chorizo' },
        { qty: '2 cans', name: 'Chickpeas' },
        { qty: '6 oz', name: 'Baby Spinach' },
        { qty: '1 tsp', name: 'Smoked Paprika' },
        { qty: '1 tbsp', name: 'Sherry Vinegar' }
      ],
      instructions: 'Sauté sliced chorizo until it releases its piquant orange oil. Soften onions, garlic, and leeks in the same oil. Add chickpeas, fire-roasted tomatoes, and chicken stock. Simmer for 25 minutes. Stir in fresh spinach at the very end until just wilted. Finish with a splash of sherry vinegar for brightness and serve with crusty bread.'
    },
    {
      id: 'arroz-al-horno',
      name: 'Arroz al horno (baked rice)',
      description: 'A rustic Valencian masterpiece: rice baked in a clay pot with ribs, blood sausage, and a whole head of garlic.',
      price: '₹449',
      image: '/assets/images/menu-2.png',
      rating: 5.0,
      tags: 'Pork • Spanish',
      ingredients: [
        { qty: '400g', name: 'Bomba Rice' },
        { qty: '250g', name: 'Pork Ribs' },
        { qty: '4', name: 'Morcilla Sausages' },
        { qty: '1 head', name: 'Whole Garlic' },
        { qty: '1 pinch', name: 'Saffron Threads' }
      ],
      instructions: 'Sear pork ribs and belly in an earthenware pot. Sauté rice with saffron and paprika to coat. Add hot pork broth and chickpeas. Arrange sliced tomatoes, potatoes, morcilla, and a whole garlic head in the center. Bake at 400°F for 20-25 minutes until a golden crust forms. Rest for 10 minutes before serving.'
    },
    {
      id: 'bbq-pork-sloppy-joes',
      name: 'BBQ Pork Sloppy Joes',
      description: 'Slow-roasted shredded pork tossed in a smoky house-made BBQ sauce, served on toasted brioche buns.',
      price: '₹329',
      image: '/assets/images/menu-3.png',
      rating: 4.7,
      tags: 'Pork • American',
      ingredients: [
        { qty: '1.5 lbs', name: 'Shredded Pork' },
        { qty: '2 cups', name: 'BBQ Sauce' },
        { qty: '6', name: 'Brioche Buns' },
        { qty: '1 cup', name: 'Bell Peppers' },
        { qty: '1 tbsp', name: 'Smoked Paprika' }
      ],
      instructions: 'Prepare a thick BBQ sauce with ketchup, vinegar, brown sugar, and beef stock. Sauté diced onions and bell peppers until soft. Stir in the shredded pork and BBQ sauce, simmering until thick and "sloppy." Serve on butter-toasted brioche buns with pickles and a side of quick-pickled red onions.'
    },
    {
      id: 'boxty-breakfast',
      name: 'Boxty Breakfast',
      description: 'Traditional Irish potato pancakes with a crispy exterior and fluffy center, served with smoky bacon lardons.',
      price: '₹359',
      image: '/assets/images/menu-4.png',
      rating: 4.9,
      tags: 'Pork • Irish',
      ingredients: [
        { qty: '1 cup', name: 'Raw Grated Potato' },
        { qty: '1 cup', name: 'Mashed Potato' },
        { qty: '1.5 cups', name: 'Buttermilk' },
        { qty: '2 oz', name: 'Irish Butter' },
        { qty: '4 strips', name: 'Smoked Bacon' }
      ],
      instructions: 'Squeeze raw grated potatoes extremely dry. Mix with smooth mashed potatoes, flour, egg, and buttermilk to form a thick batter. Fry ladles of batter in foaming Irish butter until deep golden brown on both sides. Serve with half-moon crispy bacon, a fried egg, and a dollop of crème fraîche.'
    },
    {
      id: 'cassava-pizza',
      name: 'Cassava pizza',
      description: 'A unique gluten-free pizza featuring a crispy cassava crust topped with savory shredded pork and cilantro.',
      price: '₹389',
      image: '/assets/images/menu-5.png',
      rating: 4.6,
      tags: 'Pork • Tropical',
      ingredients: [
        { qty: '2 cups', name: 'Mashed Cassava' },
        { qty: '1.5 cups', name: 'Shredded Pork' },
        { qty: '1 cup', name: 'Mozzarella' },
        { qty: '1/2 cup', name: 'Tomato Sauce' },
        { qty: 'Handful', name: 'Fresh Cilantro' }
      ],
      instructions: 'Knead mashed cassava with a little starch into a dough and par-bake until crisp. Spread with rich tomato sauce and top with shredded pork and mozzarella. Bake again until cheese is bubbly and edges are golden. Garnish with a mountain of fresh cilantro and a drizzle of lime cream sauce.'
    },
    {
      id: 'choripan',
      name: 'Choripán',
      description: 'The ultimate Argentine street snack: charcoal-grilled chorizo in a crusty roll with handmade chimichurri.',
      price: '₹319',
      image: '/assets/images/menu-6.png',
      rating: 5.0,
      tags: 'Pork • Argentinian',
      ingredients: [
        { qty: '2', name: 'Argentinian Chorizo' },
        { qty: '1', name: 'Crusty Baguette' },
        { qty: '1/2 cup', name: 'Fresh Parsley' },
        { qty: '3 cloves', name: 'Garlic' },
        { qty: '1/4 cup', name: 'Red Wine Vinegar' }
      ],
      instructions: 'Hand-chop parsley, garlic, and oregano for the chimichurri. Grill chorizo over charcoal until charred. Butterfly the sausage and sear the inside until crispy. Serve in a butter-toasted crusty baguette with a generous amount of chimichurri. Pairs perfectly with salsa criolla (tomato/onion/pepper relish).'
    }
  ],
  seafood: [
    {
      id: 'arroz-con-gambas-y-calamar',
      name: 'Arroz con gambas y calamar',
      description: 'A traditional Spanish seafood rice dish featuring succulent king prawns and tender squid simmered with saffron and aromatic spices.',
      price: '₹549',
      image: '/assets/images/menu-1.png',
      rating: 5.0,
      tags: 'Seafood • Spanish',
      ingredients: [
        { qty: '24', name: 'Raw King Prawns' },
        { qty: '450g', name: 'Paella Rice' },
        { qty: '2 tbsp', name: 'Olive Oil' },
        { qty: '2 tsp', name: 'Tomato Puree' },
        { qty: '1 small', name: 'Onion' },
        { qty: '200ml', name: 'White Wine' },
        { qty: '1', name: 'Bay Leaf' },
        { qty: '650ml', name: 'Seafood stock' },
        { qty: '1 pinch', name: 'Saffron' },
        { qty: '3 Medium', name: 'Squid' }
      ],
      instructions: 'step 1 Peel and devein most of the prawns, keeping a few whole for decoration. Heat olive oil in a large pan and fry onion for 5 mins. Add bay leaf, saffron, rice and tomato purée, and cook for 1-2 mins more. step 2 Pour in the wine and bubble for 1-2 mins, then pour in the seafood stock and 150ml water. Cook for 5 mins, then add the squid. Bring to the boil, then cover and simmer for 12 mins. step 3 Uncover and stir through the peeled prawns, then arrange whole prawns on top. Cover again and simmer for 5-6 mins until prawns are pink. Let stand for a couple of minutes before serving.'
    },
    {
      id: 'bang-bang-prawn-salad',
      name: 'Bang bang prawn salad',
      description: 'Crispy prawns tossed in a creamy, sweet and spicy dynamite sauce, served over a refreshing bed of mixed greens and cucumber.',
      price: '₹489',
      image: '/assets/images/menu-2.png',
      rating: 4.8,
      tags: 'Seafood • Asian Fusion',
      ingredients: [
        { qty: '300g', name: 'King Prawns' },
        { qty: '1/2 cup', name: 'Mayonnaise' },
        { qty: '2 tbsp', name: 'Sriracha' },
        { qty: '1 tbsp', name: 'Sweet Chili Sauce' },
        { qty: '2 cups', name: 'Iceberg Lettuce' },
        { qty: '1', name: 'English Cucumber' },
        { qty: '2', name: 'Green Onions' }
      ],
      instructions: 'Step 1: Whisk together mayonnaise, sriracha, and sweet chili sauce to make the Bang Bang dressing. Step 2: Pan-sear prawns in a hot skillet with a little oil until pink and slightly charred. Step 3: Toss the warm prawns in half of the dressing. Step 4: Arrange chopped lettuce and sliced cucumber in a bowl, top with the prawns, and drizzle with the remaining dressing. Garnish with sliced green onions.'
    },
    {
      id: 'cajun-spiced-fish-tacos',
      name: 'Cajun spiced fish tacos',
      description: 'Zesty pan-seared white fish with bold Cajun spices, tucked into warm tortillas with crunchy slaw and a lime-cilantro crema.',
      price: '₹399',
      image: '/assets/images/menu-3.png',
      rating: 4.9,
      tags: 'Seafood • American',
      ingredients: [
        { qty: '500g', name: 'White Fish Fillets' },
        { qty: '2 tbsp', name: 'Cajun Seasoning' },
        { qty: '8 mini', name: 'Corn Tortillas' },
        { qty: '2 cups', name: 'Cabbage Slaw' },
        { qty: '1/4 cup', name: 'Sour Cream' },
        { qty: '1', name: 'Lime' }
      ],
      instructions: 'Step 1: Rub the fish fillets with Cajun seasoning and salt. Step 2: Sear fish in a hot skillet for 3 mins per side until flakey. Step 3: Warm the tortillas on the stove. Step 4: Assemble tacos with flaked fish, slaw, and a dollop of sour cream mixed with lime juice. Serve with extra lime wedges.'
    },
    {
      id: 'shrimp-egg-foo-young',
      name: 'Shrimp Egg Foo Young',
      description: 'A classic Chinese-American omelette filled with succulent shrimp and crisp bean sprouts, served with a savory brown gravy.',
      price: '₹429',
      image: '/assets/images/menu-4.png',
      rating: 4.7,
      tags: 'Seafood • Chinese',
      ingredients: [
        { qty: '6 large', name: 'Eggs' },
        { qty: '200g', name: 'Chopped Shrimp' },
        { qty: '1.5 cups', name: 'Bean Sprouts' },
        { qty: '1 cup', name: 'Chicken Broth' },
        { qty: '1 tbsp', name: 'Oyster Sauce' },
        { qty: '1 tbsp', name: 'Soy Sauce' }
      ],
      instructions: 'Step 1: Whisk eggs with shrimp, sprouts, and green onions. Step 2: Fry small scoops of the mixture in a hot oiled skillet to form patties. Step 3: To make the gravy, simmer chicken broth, oyster sauce, and soy sauce, then thicken with cornstarch slurry. Step 4: Serve the hot patties generously topped with the savory gravy.'
    },
    {
      id: 'fish-fofos',
      name: 'Fish fofos',
      description: 'Portuguese-influenced Goan fish croquettes, delicately spiced and breaded for a perfect crispy exterior and soft, flavorful center.',
      price: '₹349',
      image: '/assets/images/menu-5.png',
      rating: 4.6,
      tags: 'Seafood • Indian-Portuguese',
      ingredients: [
        { qty: '400g', name: 'Boiled Fish' },
        { qty: '2 large', name: 'Mashed Potatoes' },
        { qty: '2', name: 'Green Chillies' },
        { qty: '2 tbsp', name: 'Fresh Coriander' },
        { qty: '1 cup', name: 'Breadcrumbs' },
        { qty: '1', name: 'Egg' }
      ],
      instructions: 'Step 1: Mix flaked boiled fish with mashed potatoes, chopped chillies, coriander, and salt. Step 2: Shape into small oval logs. Step 3: Dip each log into beaten egg, then roll in breadcrumbs to coat. Step 4: Shallow fry in hot oil until golden brown and crispy on all sides. Serve hot with a side of chutney.'
    },
    {
      id: 'baked-salmon-fennel-tomatoes',
      name: 'Baked salmon with fennel & tomatoes',
      description: 'Elegant Atlantic salmon roasted on a bed of aromatic fennel and sweet cherry tomatoes, finished with lemon and fresh dill.',
      price: '₹629',
      image: '/assets/images/menu-6.png',
      rating: 5.0,
      tags: 'Seafood • Healthy',
      ingredients: [
        { qty: '2', name: 'Salmon Fillets' },
        { qty: '1 bulb', name: 'Fennel (sliced)' },
        { qty: '1 cup', name: 'Cherry Tomatoes' },
        { qty: '2 tbsp', name: 'Olive Oil' },
        { qty: '1 tbsp', name: 'Lemon Juice' },
        { qty: '1 tsp', name: 'Dill' }
      ],
      instructions: 'Step 1: Toss sliced fennel and halved tomatoes with olive oil and salt in a baking dish. Step 2: Place salmon fillets on top. Step 3: Drizzle with lemon juice and sprinkle with herbs. Step 4: Bake at 200°C for 15-20 mins until salmon is just cooked through and fennel is tender.'
    },
    {
      id: 'barramundi-moroccan-spices',
      name: 'Barramundi with Moroccan spices',
      description: 'Pan-seared Australian Barramundi infused with aromatic North African spices, served with a zesty herb salad.',
      price: '₹589',
      image: '/assets/images/menu-1.png',
      rating: 4.8,
      tags: 'Seafood • Moroccan',
      ingredients: [
        { qty: '2', name: 'Barramundi Fillets' },
        { qty: '1 tbsp', name: 'Ras el Hanout' },
        { qty: '1 clove', name: 'Garlic (minced)' },
        { qty: '1/2', name: 'Lemon' },
        { qty: '2 tbsp', name: 'Olive Oil' }
      ],
      instructions: 'Step 1: Rub the fish with Moroccan spices, garlic, and salt. Step 2: Sear skin-side down in a hot pan for 4 mins until crispy. Step 3: Flip and cook for another 3 mins. Step 4: Squeeze fresh lemon over the fillets and serve with a side of couscous or salad.'
    },
    {
      id: 'clam-chorizo-white-bean-stew',
      name: 'Clam, chorizo & white bean stew',
      description: 'A hearty Spanish-style stew blending briny fresh clams with smoky chorizo and creamy cannellini beans in a rich garlic broth.',
      price: '₹519',
      image: '/assets/images/menu-2.png',
      rating: 4.9,
      tags: 'Seafood • Spanish',
      ingredients: [
        { qty: '500g', name: 'Fresh Clams' },
        { qty: '100g', name: 'Chorizo (sliced)' },
        { qty: '1 can', name: 'White Beans' },
        { qty: '2 cloves', name: 'Garlic' },
        { qty: '1 cup', name: 'Chicken Stock' },
        { qty: '1 tsp', name: 'Smoked Paprika' }
      ],
      instructions: 'Step 1: Fry chorizo in a pot until the oil is released. Add garlic and paprika. Step 2: Pour in stock and add rinsed beans. Step 3: Add clams and cover the pot. Steam for 3-5 mins until all clams have opened. Step 4: Garnish with fresh parsley and serve hot with crusty bread.'
    },
    {
      id: 'escovitch-fish',
      name: 'Escovitch Fish',
      description: 'Jamaican-style fried red snapper topped with a colorful, zesty marinade of pickled onions, carrots, and spicy scotch bonnet peppers.',
      price: '₹569',
      image: '/assets/images/menu-3.png',
      rating: 4.8,
      tags: 'Seafood • Jamaican',
      ingredients: [
        { qty: '1 whole', name: 'Red Snapper' },
        { qty: '1', name: 'Onion (sliced)' },
        { qty: '1', name: 'Carrot (julienned)' },
        { qty: '1/2 cup', name: 'White Vinegar' },
        { qty: '1', name: 'Scotch Bonnet Pepper' },
        { qty: '4', name: 'Pimento Berries' }
      ],
      instructions: 'Step 1: Fry the seasoned snapper in hot oil until crispy and cooked through. Step 2: In another pan, sauté onions, carrots, and pepper in vinegar with pimento for 2 mins. Step 3: Pour the pickling sauce over the fried fish. Step 4: Allow to sit for at least 30 mins before serving to let the flavors penetrate the fish.'
    },
    {
      id: 'luxury-fish-pie',
      name: 'Fish pie',
      description: 'The ultimate British comfort dish: chunks of fresh fish in a creamy leek sauce, topped with buttery mashed potatoes and melted cheddar.',
      price: '₹529',
      image: '/assets/images/menu-4.png',
      rating: 4.9,
      tags: 'Seafood • British',
      ingredients: [
        { qty: '400g', name: 'Mixed Fish Chunks' },
        { qty: '500g', name: 'Mashed Potatoes' },
        { qty: '1 cup', name: 'Milk' },
        { qty: '2 tbsp', name: 'Butter' },
        { qty: '1/2 cup', name: 'Peas' },
        { qty: '1/2 cup', name: 'Cheddar Cheese' }
      ],
      instructions: 'Step 1: Simmer fish chunks in milk until just cooked. Drain and reserve the milk. Step 2: Make a white sauce with butter, flour, and the reserved milk. Stir in peas. Step 3: Place fish in a baking dish, cover with sauce, and top with mashed potatoes. Step 4: Sprinkle with cheese and bake at 200°C for 25 mins until golden and bubbly.'
    }
  ],
  side: [
    {
      id: 'air-fryer-egg-rolls',
      name: 'Air Fryer Egg Rolls',
      description: 'Crispy, golden egg rolls filled with savory ground pork and fresh vegetables, perfectly cooked in an air fryer for a healthier crunch.',
      price: '₹249',
      image: '/assets/images/menu-5.png',
      rating: 5.0,
      tags: 'Side • Chinese',
      ingredients: [
        { qty: '1 lb', name: 'Ground Pork' },
        { qty: '12', name: 'Egg Roll Wrappers' },
        { qty: '3 cups', name: 'Shredded Cabbage' },
        { qty: '1', name: 'Carrot (shredded)' },
        { qty: '1 tbsp', name: 'Ginger' },
        { qty: '1 tbsp', name: 'Soy Sauce' }
      ],
      instructions: 'Step 1: Sauté pork with garlic, ginger, cabbage, and carrots until cooked. Season with soy sauce and rice vinegar. Step 2: Place filling in wrappers and roll tightly, sealing edges with water. Step 3: Brush rolls with oil and place in air fryer basket. Step 4: Cook at 180°C for 6-7 mins, flip, brush again, and cook for another 5 mins until golden brown. Serve with duck sauce.'
    },
    {
      id: 'algerian-carrots-mcharmla',
      name: 'Algerian Carrots',
      description: 'Tender carrots marinated in a bold "dersa" garlic sauce with paprika, caraway seeds, and a zesty vinegar finish.',
      price: '₹189',
      image: '/assets/images/menu-6.png',
      rating: 4.8,
      tags: 'Side • Algerian',
      ingredients: [
        { qty: '500g', name: 'Carrots' },
        { qty: '3 cloves', name: 'Garlic' },
        { qty: '1 tsp', name: 'Paprika' },
        { qty: '1/2 tsp', name: 'Caraway Seeds' },
        { qty: '1.5 tbsp', name: 'Vinegar' }
      ],
      instructions: 'Step 1: Boil carrots until just tender, then drain and slice. Step 2: Sauté minced garlic, spices, and oil to make the dersa. Step 3: Add carrots to the pan and toss to coat in the aromatic spices. Step 4: Finish with vinegar and serve warm or at room temperature.'
    },
    {
      id: 'blini-pancakes',
      name: 'Blini Pancakes',
      description: 'Small, delicate yeast-raised pancakes, perfect as a gourmet appetizer base with sour cream or savory toppings.',
      price: '₹229',
      image: '/assets/images/menu-1.png',
      rating: 4.7,
      tags: 'Side • International',
      ingredients: [
        { qty: '1/3 cup', name: 'Plain Flour' },
        { qty: '1/2 tsp', name: 'Dry Yeast' },
        { qty: '1/3 cup', name: 'Warm Milk' },
        { qty: '2 tbsp', name: 'Butter (melted)' },
        { qty: '1', name: 'Egg (separated)' }
      ],
      instructions: 'Step 1: Activate yeast in warm milk with a pinch of sugar. Step 2: Mix flour, egg yolk, and yeast mixture into a smooth batter. Let rise for 45 mins. Step 3: Gently fold in whipped egg white. Step 4: Cook small spoonfuls in a buttered pan until golden on both sides.'
    },
    {
      id: 'brie-prosciutto-brioche',
      name: 'Brie wrapped in prosciutto & brioche',
      description: 'A decadent masterpiece featuring a whole Brie wheel wrapped in salty prosciutto and encased in golden, buttery brioche bread.',
      price: '₹589',
      image: '/assets/images/menu-2.png',
      rating: 5.0,
      tags: 'Side • French',
      ingredients: [
        { qty: '250g', name: 'Brie Wheel' },
        { qty: '8 slices', name: 'Prosciutto' },
        { qty: '300g', name: 'Brioche Dough' },
        { qty: '1', name: 'Egg (for wash)' }
      ],
      instructions: 'Step 1: Wrap the Brie wheel tightly in prosciutto slices. Step 2: Roll out brioche dough and encase the cheese, sealing the joints. Step 3: Brush with egg wash and bake at 190°C for 20-25 mins until golden brown. Step 4: Let sit for 5 mins before slicing to reveal the molten center.'
    },
    {
      id: 'cacik-turkish-dip',
      name: 'Cacik',
      description: 'A cooling Turkish classic made with thick yogurt, grated cucumber, garlic, and dried mint, finished with a drizzle of olive oil.',
      price: '₹149',
      image: '/assets/images/menu-3.png',
      rating: 4.9,
      tags: 'Side • Turkish',
      ingredients: [
        { qty: '2 cups', name: 'Greek Yogurt' },
        { qty: '1', name: 'Large Cucumber' },
        { qty: '2 cloves', name: 'Garlic' },
        { qty: '1 tsp', name: 'Dried Mint' },
        { qty: '1 tbsp', name: 'Olive Oil' }
      ],
      instructions: 'Step 1: Grate the cucumber and squeeze out excess moisture. Step 2: Whisk yogurt with minced garlic and salt. Step 3: Fold in the cucumber and mint. Step 4: Serve in a bowl with a generous drizzle of olive oil and extra mint on top.'
    },
    {
      id: 'algerian-bouzgene-bread',
      name: 'Algerian Bouzgene Berber Bread with Roasted Pepper Sauce',
      description: 'Rustic, crispy Berber flatbread served with a smoky, hand-crushed roasted pepper and tomato dipping sauce.',
      price: '₹289',
      image: '/assets/images/menu-4.png',
      rating: 4.8,
      tags: 'Side • Algerian',
      ingredients: [
        { qty: '2 lbs', name: 'Semolina' },
        { qty: '2', name: 'Red Bell Peppers' },
        { qty: '4', name: 'Vine Tomatoes' },
        { qty: '5 cloves', name: 'Garlic' },
        { qty: '4 tbsp', name: 'Olive Oil' }
      ],
      instructions: 'Step 1: Roast peppers and tomatoes until charred, then peel and crush into a sauce with garlic. Step 2: Make a firm dough with semolina, water, and oil. Step 3: Roll into rounds and fry in a heavy skillet until golden and crispy. Step 4: Serve the hot bread with the smoky pepper dip.'
    },
    {
      id: 'classic-baba-ghanoush',
      name: 'Baba Ghanoush',
      description: 'A smooth, smoky eggplant dip blended with tahini, lemon juice, and garlic, perfect for dipping warm pita.',
      price: '₹199',
      image: '/assets/images/menu-5.png',
      rating: 4.9,
      tags: 'Side • Middle Eastern',
      ingredients: [
        { qty: '2', name: 'Large Eggplants' },
        { qty: '1/4 cup', name: 'Tahini' },
        { qty: '3 tbsp', name: 'Lemon Juice' },
        { qty: '2 cloves', name: 'Garlic' },
        { qty: '1 tsp', name: 'Cumin' }
      ],
      instructions: 'Step 1: Roast eggplants until skin is charred and flesh is soft. Step 2: Scoop out flesh and drain liquid. Step 3: Mash with tahini, lemon, garlic, and cumin until creamy. Step 4: Serve drizzled with olive oil and a sprinkle of paprika.'
    },
    {
      id: 'boulangere-potatoes',
      name: 'Boulangère Potatoes',
      description: 'Thinly sliced potatoes and onions slow-baked in a savory herb-infused stock until tender and golden.',
      price: '₹219',
      image: '/assets/images/menu-6.png',
      rating: 4.7,
      tags: 'Side • French',
      ingredients: [
        { qty: '1 kg', name: 'Potatoes' },
        { qty: '1 large', name: 'Onion' },
        { qty: '250 ml', name: 'Vegetable Stock' },
        { qty: '50g', name: 'Butter' },
        { qty: '1 tbsp', name: 'Thyme' }
      ],
      instructions: 'Step 1: Layer thinly sliced potatoes and onions in a buttered dish. Step 2: Season each layer with thyme, salt, and pepper. Step 3: Pour over stock and dot with butter. Step 4: Bake at 180°C for 50-60 mins until potatoes are tender and the top is crispy.'
    },
    {
      id: 'burek-pastry',
      name: 'Burek',
      description: 'Flaky phyllo pastry spiral filled with a savory blend of spiced ground beef and onions, baked until deep golden and crisp.',
      price: '₹269',
      image: '/assets/images/menu-1.png',
      rating: 4.9,
      tags: 'Side • Balkan',
      ingredients: [
        { qty: '1 pack', name: 'Phyllo Pastry' },
        { qty: '500g', name: 'Ground Beef' },
        { qty: '1', name: 'Onion' },
        { qty: '2 tbsp', name: 'Melted Butter' }
      ],
      instructions: 'Step 1: Sauté beef and onions with spices until cooked. Step 2: Brush phyllo sheets with butter and layer. Step 3: Add filling, roll into a long tube, and coil into a spiral. Step 4: Bake at 190°C for 25-30 mins until flaky and golden brown.'
    },
    {
      id: 'callaloo-saltfish',
      name: 'Callaloo and SaltFish',
      description: 'A traditional Caribbean breakfast staple featuring sautéed callaloo greens and flaked salted cod with tomatoes and scotch bonnet.',
      price: '₹349',
      image: '/assets/images/menu-2.png',
      rating: 4.8,
      tags: 'Side • Jamaican',
      ingredients: [
        { qty: '1/2 lb', name: 'Saltfish' },
        { qty: '19 oz', name: 'Callaloo' },
        { qty: '1', name: 'Onion' },
        { qty: '2', name: 'Tomatoes' },
        { qty: '1', name: 'Scotch Bonnet' }
      ],
      instructions: 'Step 1: Boil saltfish to remove excess salt, then flake. Step 2: Sauté onions, garlic, and pepper. Step 3: Add tomatoes and callaloo, simmering for 5 mins. Step 4: Stir in the fish and steam for 5-10 mins more. Serve hot.'
    }
  ],
  vegan: [
    {
      id: 'fasoliyyeh-bi-z-zayt-syrian',
      name: 'Fasoliyyeh Bi Z-Zayt',
      description: 'Syrian-style green beans in olive oil. A simple yet soulful dish featuring tender green beans steamed in extra virgin olive oil with garlic and fresh cilantro.',
      price: '₹269',
      image: '/assets/images/menu-3.png',
      rating: 5.0,
      tags: 'Vegan • Syrian',
      ingredients: [
        { qty: '16 ounces', name: 'Green Beans' },
        { qty: '1/4 cup', name: 'Olive Oil' },
        { qty: 'Dash', name: 'Salt' },
        { qty: '1 clove', name: 'Garlic' },
        { qty: '1/4 cup', name: 'Cilantro' }
      ],
      instructions: 'Place the green beans into a large pot, and drizzle with olive oil. Season with salt to taste, and put the lid on the pot. Cook over medium-high heat, stirring occasionally, until beans are cooked to your desired doneness. Syrians like it cooked until the green beans are turning brownish in color. The idea is not to saute them, but to let them steam in the moisture released by the ice crystals. Add cilantro and garlic to the beans, and continue to cook just until the cilantro has started to wilt. Eat as a main course by scooping up with warm pita bread or serve as a side dish.'
    },
    {
      id: 'red-onion-pickle-zesty',
      name: 'Red onion pickle',
      description: 'Zesty and vibrant pickled red onions, a perfect crunchy accompaniment to balance any rich plant-based meal.',
      price: '₹129',
      image: '/assets/images/menu-4.png',
      rating: 4.6,
      tags: 'Vegan • Accompaniment',
      ingredients: [
        { qty: '2', name: 'Red Onions' },
        { qty: '1 cup', name: 'Apple Cider Vinegar' },
        { qty: '1 tbsp', name: 'Sugar' },
        { qty: '1 tsp', name: 'Salt' },
        { qty: '1/2 tsp', name: 'Peppercorns' }
      ],
      instructions: 'Step 1: Slice red onions into thin rings. Step 2: Combine vinegar, sugar, salt, and peppercorns in a jar. Step 3: Add onions and shake well. Step 4: Refrigerate for at least 30 mins before serving. Lasts for weeks!'
    },
    {
      id: 'vegan-banh-mi-vietnamese',
      name: 'Vegan banh mi',
      description: 'Crispy baguette filled with marinated tofu, pickled carrots, cucumber, and fresh herbs — a plant-based twist on the Vietnamese classic.',
      price: '₹329',
      image: '/assets/images/menu-5.png',
      rating: 4.9,
      tags: 'Vegan • Vietnamese',
      ingredients: [
        { qty: '1', name: 'Baguette' },
        { qty: '200g', name: 'Firm Tofu' },
        { qty: '1/2 cup', name: 'Pickled Carrots' },
        { qty: 'Handful', name: 'Fresh Cilantro' },
        { qty: '2 tbsp', name: 'Vegan Mayo' }
      ],
      instructions: 'Step 1: Press and slice tofu, then sear until crispy. Step 2: Warm the baguette and slice lengthwise. Step 3: Spread vegan mayo on both sides. Step 4: Layer with tofu, pickled carrots, cucumber, and a mountain of fresh cilantro. Serve with sliced jalapeños.'
    },
    {
      id: 'vegan-lasagna-comfort',
      name: 'Vegan Lasagna',
      description: 'A hearty and comforting lasagna with layers of rich tomato lentil ragu, creamy cashew béchamel, and delicate pasta sheets.',
      price: '₹429',
      image: '/assets/images/menu-6.png',
      rating: 4.7,
      tags: 'Vegan • Italian',
      ingredients: [
        { qty: '9 sheets', name: 'Vegan Pasta' },
        { qty: '2 cups', name: 'Lentil Ragu' },
        { qty: '2 cups', name: 'Cashew Béchamel' },
        { qty: '1 cup', name: 'Vegan Mozzarella' },
        { qty: '1', name: 'Zucchini sliced' }
      ],
      instructions: 'Step 1: Layer lentil ragu, pasta sheets, and cashew béchamel in a baking dish. Step 2: Repeat layers, adding sliced zucchini in the middle for extra texture. Step 3: Top with vegan mozzarella. Step 4: Bake at 190°C for 35-40 mins until bubbly and golden. Let rest for 10 mins before slicing.'
    },
    {
      id: 'padron-peppers-blistered',
      name: 'Padron peppers',
      description: 'Authentic Spanish Padrón peppers flash-fried in extra virgin olive oil and topped with coarse sea salt — simple and addictive.',
      price: '₹249',
      image: '/assets/images/menu-1.png',
      rating: 4.8,
      tags: 'Vegan • Spanish',
      ingredients: [
        { qty: '250g', name: 'Padron Peppers' },
        { qty: '2 tbsp', name: 'Olive Oil' },
        { qty: '1 tsp', name: 'Flaky Sea Salt' }
      ],
      instructions: 'Step 1: Wash and thoroughly dry the peppers. Step 2: Heat olive oil in a heavy skillet until shimmering. Step 3: Add peppers and fry for 2-3 minutes, tossing frequently, until they are blistered and slightly charred. Step 4: Drain briefly on paper towels, then sprinkle generously with flaky sea salt and serve immediately.'
    },
    {
      id: 'roast-fennel-aubergine-paella',
      name: 'Roast fennel and aubergine paella',
      description: 'A vibrant plant-based paella featuring smoke-roasted fennel and aubergine, simmered with saffron-infused Bomba rice.',
      price: '₹489',
      image: '/assets/images/menu-2.png',
      rating: 5.0,
      tags: 'Vegan • Spanish',
      ingredients: [
        { qty: '400g', name: 'Bomba Rice' },
        { qty: '1 bulb', name: 'Fennel' },
        { qty: '1 large', name: 'Aubergine' },
        { qty: '1 pinch', name: 'Saffron' },
        { qty: '750ml', name: 'Vegetable Stock' }
      ],
      instructions: 'Step 1: Roast chunks of fennel and aubergine with olive oil until tender. Step 2: In a paella pan, sauté onion and garlic. Stir in rice and saffron. Step 3: Pour in hot vegetable stock and simmer without stirring for 15 mins. Step 4: Arrange roasted vegetables on top and continue to cook until a "socarrat" forms on the bottom. Garnish with lemon.'
    },
    {
      id: 'vegan-chocolate-cake-decadent',
      name: 'Vegan Chocolate Cake',
      description: 'A moist and decadent chocolate cake made with dark cocoa and almond milk, finished with a silky ganache and fresh strawberries.',
      price: '₹299',
      image: '/assets/images/menu-3.png',
      rating: 4.9,
      tags: 'Vegan • Dessert',
      ingredients: [
        { qty: '2 cups', name: 'Flour' },
        { qty: '3/4 cup', name: 'Cocoa Powder' },
        { qty: '1 cup', name: 'Almond Milk' },
        { qty: '1/2 cup', name: 'Coconut Oil' },
        { qty: '1 tbsp', name: 'Flaxseed meal' }
      ],
      instructions: 'Step 1: Whisk dry ingredients. Combine with almond milk, oil, and flax "egg". Step 2: Bake at 180°C for 30 mins. Step 3: Let cool, then top with a vegan chocolate ganache (made with dark chocolate and coconut cream). Step 4: Garnish with fresh strawberries and a dusting of cocoa.'
    },
    {
      id: 'lentil-dal-indian-comfort',
      name: 'Lentil Dal',
      description: 'Nutritious yellow lentils tempered with cumin, turmeric, and garlic — a staple Indian comfort food that is naturally vegan.',
      price: '₹199',
      image: '/assets/images/menu-4.png',
      rating: 4.8,
      tags: 'Vegan • Indian',
      ingredients: [
        { qty: '1 cup', name: 'Split Yellow Lentils' },
        { qty: '1/2 tsp', name: 'Turmeric' },
        { qty: '1 tsp', name: 'Cumin Seeds' },
        { qty: '2 cloves', name: 'Garlic' },
        { qty: '1', name: 'Tomato' }
      ],
      instructions: 'Step 1: Boil lentils with turmeric and salt until mushy. Step 2: In a small pan, heat oil and add cumin seeds until they crackle. Add garlic and dried red chilies. Step 3: Stir in chopped tomatoes and cook until soft. Step 4: Pour this "tadka" over the boiled lentils, stir well, and garnish with fresh cilantro.'
    },
    {
      id: 'quinoa-budda-bowl-rainbow',
      name: 'Quinoa Budda Bowl',
      description: 'A rainbow bowl of fluffy quinoa, roasted chickpeas, sweet potato, and kale, served with a creamy lemon-tahini dressing.',
      price: '₹349',
      image: '/assets/images/menu-5.png',
      rating: 4.9,
      tags: 'Vegan • Healthy',
      ingredients: [
        { qty: '1 cup', name: 'Cooked Quinoa' },
        { qty: '1/2 cup', name: 'Roasted Chickpeas' },
        { qty: '1/2', name: 'Sweet Potato roasted' },
        { qty: '1 cup', name: 'Massaged Kale' },
        { qty: '2 tbsp', name: 'Tahini Dressing' }
      ],
      instructions: 'Step 1: Place quinoa in the base of a bowl. Step 2: Arrange sections of chickpeas, sweet potato, and kale. Step 3: Top with avocado slices and hemp seeds. Step 4: Drizzle generously with lemon-tahini dressing before serving.'
    },
    {
      id: 'falafel-wrap-heritage',
      name: 'Falafel Wrap',
      description: 'Authentic crispy falafels wrapped in warm flatbread with creamy hummus, tangy pickles, and a fresh Mediterranean salad.',
      price: '₹269',
      image: '/assets/images/menu-6.png',
      rating: 5.0,
      tags: 'Vegan • Middle Eastern',
      ingredients: [
        { qty: '4', name: 'Crispy Falafels' },
        { qty: '1', name: 'Flatbread' },
        { qty: '2 tbsp', name: 'Hummus' },
        { qty: '1/4 cup', name: 'Diced Salad' },
        { qty: '1 tbsp', name: 'Tahini' }
      ],
      instructions: 'Step 1: Spread hummus on a warm flatbread. Step 2: Place falafels and slightly crush them. Step 3: Top with cucumber, tomato, and pickled turnips. Step 4: Drizzle with tahini, wrap tightly, and enjoy warm.'
    }
  ],
  vegetarian: [
    {
      id: 'air-fryer-patatas-bravas-spanish',
      name: 'Air fryer patatas bravas',
      description: 'Crispy air-fried potato chunks topped with a spicy, smoky tomato sauce and a drizzle of creamy garlic aioli. An iconic Spanish tapa made healthier.',
      price: '₹249',
      image: '/assets/images/menu-1.png',
      rating: 5.0,
      tags: 'Vegetarian • Spanish',
      ingredients: [
        { qty: '900g', name: 'Potatoes' },
        { qty: '3 tablespoons', name: 'Olive Oil' },
        { qty: '1 chopped', name: 'Onion' },
        { qty: '1 clove peeled crushed', name: 'Garlic' },
        { qty: '1 tblsp', name: 'Paprika' },
        { qty: '1 tblsp', name: 'Tomato Puree' },
        { qty: '225g', name: 'Tinned Tomatos' },
        { qty: 'To serve', name: 'Basil Leaves' }
      ],
      instructions: 'step 1 Soak the potatoes in just-boiled water for 30 mins, then drain and leave to air-dry for 5 mins. Heat the air fryer to 200C. Tip the potatoes into a bowl and drizzle over 1 tbsp of the oil and add 1/2 tsp each of salt and freshly ground black pepper. Mix to coat the potatoes all over, then tip into the air fryer basket and cook for 20-30 mins until crisp and golden. step 2 Meanwhile, heat the remaining oil in a small pan over a medium-low heat and fry the onion for 8-10 mins until softened but not golden. Stir in the garlic and cook for a minute before adding the paprika and cooking for 30 seconds more. Stir in the tomato purée, cook for 1 min, then tip in the chopped tomatoes. Cook for 5-10 mins over a medium heat until thickened slightly. step 3 Once the potatoes are cooked, tip out onto a platter and pour over the tomato sauce. Sprinkle with the basil leaves, then serve.'
    },
    {
      id: 'aubergine-hummus-grills-mediterranean',
      name: 'Aubergine & hummus grills',
      description: 'Thickly sliced lengthways grilled aubergine topped with creamy hummus, toasted walnuts, and a fresh parsley-tomato salad.',
      price: '₹279',
      image: '/assets/images/menu-2.png',
      rating: 4.8,
      tags: 'Vegetarian • Mediterranean',
      ingredients: [
        { qty: '2', name: 'Aubergines' },
        { qty: '2 tbsp', name: 'Vegetable Oil' },
        { qty: '3 slices', name: 'Breadcrumbs' },
        { qty: '300g tub', name: 'Hummus' },
        { qty: '100g', name: 'Toasted Walnuts' }
      ],
      instructions: 'Step 1: Brush aubergine slices with oil and grill for 15 mins until soft. Step 2: Spread hummus over each slice and press into breadcrumbs. Grill for 3 mins until golden. Step 3: Mix walnuts, parsley, and cherry tomatoes with lemon juice and olive oil. Step 4: Top the warm aubergine with the salad and serve with extra hummus.'
    },
    {
      id: 'avocado-dip-new-potatoes-healthy',
      name: 'Avocado dip with new potatoes',
      description: 'Creamy smashed avocado dip served with warm, herb-roasted new potatoes — a fresh and satisfying seasonal starter.',
      price: '₹229',
      image: '/assets/images/menu-3.png',
      rating: 4.7,
      tags: 'Vegetarian • Healthy',
      ingredients: [
        { qty: '500g', name: 'New Potatoes' },
        { qty: '2', name: 'Ripe Avocados' },
        { qty: '1 tbsp', name: 'Lime Juice' },
        { qty: '1 tbsp', name: 'Olive Oil' },
        { qty: 'Fresh Herbs', name: 'to garnish' }
      ],
      instructions: 'Step 1: Boil new potatoes until tender, then halve and roast with olive oil until slightly crisp. Step 2: Mash avocados with lime juice, salt, and red pepper flakes until creamy. Step 3: Arrange warm potatoes on a platter around the avocado dip. Step 4: Garnish with fresh chives and serve immediately.'
    },
    {
      id: 'beetroot-red-cabbage-sauerkraut-polish',
      name: 'Beetroot & red cabbage sauerkraut',
      description: 'A tangy and colorful fermented salad blending earthy beetroot with crunchy red cabbage and aromatic caraway seeds.',
      price: '₹189',
      image: '/assets/images/menu-4.png',
      rating: 4.6,
      tags: 'Vegetarian • Fermented',
      ingredients: [
        { qty: '1', name: 'Red Cabbage shredded' },
        { qty: '2', name: 'Beetroots grated' },
        { qty: '2 tbsp', name: 'Sea Salt' },
        { qty: '1 tsp', name: 'Caraway Seeds' }
      ],
      instructions: 'Step 1: Mix cabbage, beetroot, and salt in a large bowl. Massage until liquid is released. Step 2: Stir in caraway seeds. Step 3: Pack tightly into a clean glass jar, ensuring the vegetables are submerged in their own juice. Step 4: Ferment at room temperature for 5-7 days before moving to the fridge. Serve as a bright, tangy side.'
    },
    {
      id: 'beetroot-soup-borscht-traditional',
      name: 'Beetroot Soup (Borscht)',
      description: 'Traditional Eastern European Borscht, deep ruby-red and full of earthy sweetness, served with a dollop of sour cream and fresh dill.',
      price: '₹269',
      image: '/assets/images/menu-5.png',
      rating: 4.9,
      tags: 'Vegetarian • Eastern European',
      ingredients: [
        { qty: '4', name: 'Large Beets' },
        { qty: '2', name: 'Potatoes' },
        { qty: '1 liter', name: 'Vegetable Stock' },
        { qty: '1 tbsp', name: 'Vinegar' },
        { qty: '1/2 cup', name: 'Sour Cream' }
      ],
      instructions: 'Step 1: Sauté onions and carrots, then add cubed beets and potatoes. Step 2: Pour in vegetable stock and simmer for 30 mins until vegetables are tender. Step 3: Add vinegar for balance and adjust seasoning. Step 4: Serve hot or cold with a generous dollop of sour cream and fresh dill.'
    },
    {
      id: 'algerian-flafla-roasted-salad',
      name: 'Algerian Flafla',
      description: 'Authentic roasted bell pepper and tomato salad from Algeria, smoky and soft, served cold or warm with crusty bread.',
      price: '₹239',
      image: '/assets/images/menu-6.png',
      rating: 4.8,
      tags: 'Vegetarian • Algerian',
      ingredients: [
        { qty: '4', name: 'Bell Peppers' },
        { qty: '2', name: 'Tomatoes' },
        { qty: '2 cloves', name: 'Garlic' },
        { qty: '3 tbsp', name: 'Olive Oil' },
        { qty: 'Fresh Parsley', name: 'to garnish' }
      ],
      instructions: 'Step 1: Roast peppers and tomatoes until skins are charred. Peel and remove seeds. Step 2: Cut the vegetables into thin strips. Step 3: Sauté garlic in olive oil, then add vegetables and cook for 5-10 mins. Step 4: Season with salt and pepper. Serve with a shower of fresh parsley and warm flatbread.'
    },
    {
      id: 'aubergine-couscous-salad-zesty',
      name: 'Aubergine couscous salad',
      description: 'Zesty North African style salad with roasted aubergine, fluffy couscous, pomegranate seeds, and a lemon-tahini dressing.',
      price: '₹289',
      image: '/assets/images/menu-1.png',
      rating: 4.7,
      tags: 'Vegetarian • North African',
      ingredients: [
        { qty: '1 cup', name: 'Couscous' },
        { qty: '1', name: 'Large Aubergine' },
        { qty: '1/2 cup', name: 'Pomegranate Seeds' },
        { qty: '1/4 cup', name: 'Fresh Mint' },
        { qty: '2 tbsp', name: 'Lemon Juice' }
      ],
      instructions: 'Step 1: Roast cubed aubergine with cumin and cinnamon. Step 2: Prepare couscous by soaking in boiling vegetable stock for 5 mins. Step 3: Toss fluffy couscous with roasted aubergine, mint, and pomegranate. Step 4: Drizzle with lemon juice and olive oil. serve cold or at room temperature.'
    },
    {
      id: 'baingan-bharta-smoky-indian',
      name: 'Baingan Bharta',
      description: 'Fire-roasted eggplant mashed and sautéed with onions, tomatoes, ginger, and aromatic Indian spices for a deeply smoky flavor.',
      price: '₹249',
      image: '/assets/images/menu-2.png',
      rating: 4.9,
      tags: 'Vegetarian • Indian',
      ingredients: [
        { qty: '1 large', name: 'Eggplant' },
        { qty: '1', name: 'Onion chopped' },
        { qty: '2', name: 'Tomatoes' },
        { qty: '1 tsp', name: 'Cumin powder' },
        { qty: '1 tbsp', name: 'Ginger-Garlic Paste' }
      ],
      instructions: 'Step 1: Roast the whole eggplant over an open flame until charred and soft. Peel and mash. Step 2: Sauté onions and ginger-garlic paste until golden. Add tomatoes and spices. Step 3: Stir in the mashed eggplant and cook for 10 minutes, mashing further. Step 4: Garnish with fresh coriander and serve hot with buttery tandoori naan.'
    },
    {
      id: 'beetroot-latkes-crispy-jewish',
      name: 'Beetroot latkes',
      description: 'Vibrant and crispy beetroot pancakes, a colorful twist on the classic Jewish latke, served with horseradish-infused sour cream.',
      price: '₹219',
      image: '/assets/images/menu-3.png',
      rating: 4.8,
      tags: 'Vegetarian • Jewish',
      ingredients: [
        { qty: '3 medium', name: 'Beetroots' },
        { qty: '1', name: 'Onion' },
        { qty: '1', name: 'Large Egg' },
        { qty: '3 tbsp', name: 'Flour' },
        { qty: 'Vegetable Oil', name: 'for frying' }
      ],
      instructions: 'Step 1: Grate beets and onion finely. Squeeze out all excess moisture using a kitchen towel. Step 2: Whisk egg with flour, salt, and pepper. Stir in the beet mixture. Step 3: Fry heaping spoonfuls in hot oil until golden brown and crispy on both sides. Step 4: Drain on paper towels and serve warm with a dollop of sour cream and fresh chives.'
    },
    {
      id: 'braised-stuffed-cabbage-vegetarian',
      name: 'Braised stuffed cabbage',
      description: 'Tender cabbage leaves stuffed with a savory mixture of rice, mushrooms, and herbs, slow-braised in a rich tomato sauce.',
      price: '₹329',
      image: '/assets/images/menu-4.png',
      rating: 4.7,
      tags: 'Vegetarian • Eastern European',
      ingredients: [
        { qty: '1 whole', name: 'Cabbage head' },
        { qty: '1 cup', name: 'Cooked Rice' },
        { qty: '1 cup', name: 'Mushrooms' },
        { qty: '2 cups', name: 'Tomato Sauce' },
        { qty: '1 tbsp', name: 'Fresh Dill' }
      ],
      instructions: 'Step 1: Blanch whole cabbage leaves in boiling water until pliable. Step 2: Mix rice, sautéed mushrooms, and herbs. Place a spoonful into each leaf and roll tightly. Step 3: Arrange rolls in a large pot and cover with tomato sauce. Step 4: Simmer over low heat for 1 hour until cabbage is meltingly tender. Serve with extra dill.'
    }
  ]
};

