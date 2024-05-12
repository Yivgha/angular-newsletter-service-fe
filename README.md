# NewsletterServiceFe

![https://img.shields.io/badge/-Angular-DD0031?style=flat-square&logo=angular&logoColor=white](https://img.shields.io/badge/-Angular-DD0031?style=flat-square&logo=angular&logoColor=white) ![https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square) ![https://img.shields.io/badge/tailwindcss-0F172A?&logo=tailwindcss](https://img.shields.io/badge/tailwindcss-0F172A?&logo=tailwindcss) ![https://img.shields.io/badge/%20-Angular%20Material-blue?style=for-the-badge&logo=angular](https://img.shields.io/badge/%20-Angular%20Material-blue?style=for-the-badge&logo=angular)

This is simple newsletter service, generated with Angular 17.3.7. You can see four first posts on main page, search posts by a tag name or select tags from dropdown menu.

![Main](./src/assets/fe-main.jpg)

## Main page

You can type tag name in searchbar and after click on button, only posts including this tag will be shown. If you clear search field and click button again, you'll see default four posts.

![Main](./src/assets/search-bar.jpg)

You can select a tag name from dropdown menu and only posts including selected option will be shown. After click on "All" option, default four posts will be shown. The same logic is on tag click on each post card.

![Main](./src/assets/select.jpg)

## Post card

Each post card on Home or Posts page is clickable. You can click on tag buttons to render posts by tag. If you click on Summary or Content, you'll be able to see hidden text.

![Main](./src/assets/clickable.jpg)

Also you can click on post's image and open post page. On this page you can see all detailed info and big image. On Goback button click you'll be redirected on previous page.

![Main](./src/assets/post.jpg)

## Posts page

On posts page renders only list of first 10 posts (potentially, some infinite scroll logic can be added). All post cards are reusable and have the same logic as on main page.

![Main](./src/assets/posts.jpg)
