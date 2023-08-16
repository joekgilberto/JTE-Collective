# Project Title:
JTE Collective

## Project Summary:
An Express app that allows users to post listings to sell items, and for other users to bid on said listings.

MVP will include:
- A homepage with all the current listings
- Show pages for each listing
- Contains the title, description, price, and status of a listing
- Current bids for a listing displayed on each show page
- Contains the price and if accepted or pending
- Related to listings in a 1:M relationship
- Listing --< Auction
- The functionality to add more bids to a listing
- Middleware to auto accept or deny bid
- The functionality to edit listings
- The functionality to delete listings and bids
- Has CSS styling
- Deployed on Heroku

## Team Members
Ethan Ribeiro, Trey Howard, & Joe Gilberto

## Roles
- Frontend - Joe & Trey
- Backend - Joe & Ethan
- Git wrangler - Ethan
- Design lead - Trey
- Research / documentation lead - Ethan

### Primary Model / Schema - Listings
| **Property**      | **Description** |
| ----------- | ----------- |
| _id      | Objectid       |
| title   | String, required        |
| description   | String, requried        |
| price   | Number, required        |
| image   | Buffer        |
| sold   | Boolean, default is false but editing the listing can change this to true        |
| user   | _id: ObjectId, Ref: "User"        |
| username   | String        |
| category   | _id: ObjectId, Ref: “Category”        |

### Secondary Model / Schema - Auctions
| **Property** | **Description** |
| ------------ | --------------- |
| _id | Objectid |
| offer | String, required |
| accepted | Boolean, middleware to set to true if it is the highest offer on a listing |
| user | ObjectId |
| username | String |
| listing | _id: ObjectId, Ref: "Listing" |

### MVP CRUD / Restful routes - Example Resource 

| **Route name** | **CRUD operation** | **URL endpoint** | **Module name** | **Controller Action** | **Notes** |
| -------------- | ------------------ | ---------------- | --------------- | --------------------- | --------- |
| POST | Create | /listing/new | Listings | listingCtrl.create | listing.js router |
| POST | Create | /listing/:id/auction/new | Auction | auctionCtrl.create | auction.js router |
| GET | READ | /listing | Listing | listingCtrl.index | listing.js router |
| GET | READ | /listing/new | Listing | listingCtrl.new | listing.js router |
| GET | READ | /listing/:id | Listing | listingCtrl.show | listing.js router |
| GET | READ | /listing/:id/edit | Listing | listingCtrl.edit | listing.js router |
| PUT | Update | /listing/:id | Listing | listingCtrl.update | listing.js router |
| DELETE | Delete | /listing/:id | Listing | listingCtrl.delete | listing.js router |
| DELETE | Delete | /listing/:listingId/auction/:auctionId | Auction | auctionCtrl.delete | auction.js router |


### GitHub Repo:
[https://github.com/joekgilberto/JTE-Collective](https://github.com/joekgilberto/JTE-Collective)

### Trello Board:
[https://trello.com/b/Us5AUvoN/project-2-group-1](https://trello.com/b/Us5AUvoN/project-2-group-1)

### Wireframes:
- [Index](https://docs.google.com/drawings/d/1ViKOCMWH21esrcvoFOHH1lxb1LkkbiLl759bv1XesUg/edit?usp=sharing )
- [New](https://docs.google.com/drawings/d/1VrdzyRghO6Q-VOJsDO6MCTEIUGi_ISaMDjJyvCB_LVY/edit?usp=sharing )
- [Show](https://docs.google.com/drawings/d/1O0UVnilkSLg1lQhve9dzw8_GARenQ9AsAuOeztDGpAE/edit?usp=sharing )
- [Edit](https://docs.google.com/drawings/d/1e6N6awh2o93lvZYiuq3WxmKmLA8qbaETvHmPEHEydd4/edit?usp=sharing )

### ERD
[https://lucid.app/lucidchart/8c60c9c3-24d7-4f71-ae99-c73acc7b9a17/edit?viewport_loc=-176%2C13%2C2165%2C1200%2C0_0&invitationId=inv_f0f0fe1a-5404-4fa2-b8ba-5e1ae894b323](https://lucid.app/lucidchart/8c60c9c3-24d7-4f71-ae99-c73acc7b9a17/edit?viewport_loc=-176%2C13%2C2165%2C1200%2C0_0&invitationId=inv_f0f0fe1a-5404-4fa2-b8ba-5e1ae894b323)

### User Story
1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 