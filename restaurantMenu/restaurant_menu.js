const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $22.99', 'Oatmeal - $21.99', 'Frittata - $15'];
const mainCourseMenu = ['Steak - $12', 'Pasta - $24 ', 'Burger - $15', 'Salmon - $30'];
const dessertMenu = ['Cake - $22', 'Ice Cream - $20', 'Pudding - $15', 'Fruit Salad - $20'];

    const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
    document.getElementById('breakfastMenuItems').innerHTML= breakfastMenuItemsHTML;

    let mainCourseItem = '';
    mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
    document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

    let dessertItem = '';
    for (let i = 0; i < dessertMenu.length; i++) {
        dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
    document.getElementById('dessertMenuItems').innerHTML = dessertItem;