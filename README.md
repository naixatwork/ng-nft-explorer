# NFT EXPLORER DEMO

### How to run the project
- make sure that you have installed the latest version of node js
- to run the project please run ``npm i`` followed by ``npm start``

#### development
- TDD
- Clean Code
- None Destructive CSS
- SOLID Principles
- Angular coding style guide
  - https://angular.io/guide/styleguide
- Modern UI with good UX
  - glass morphism without considering it's flaws

#### General
- [x] find and rank some clone projects to get ideas
  - https://www.figma.com/community/file/1168875964024686985
  - https://www.nftexplorer.app/collections
  - https://dappradar.com/hub/nft-explorer
  - https://wax.atomichub.io/explorer
  - https://www.blockchain.com/explorer/nfts
  - https://opensea.io/
    - bold +
    - heavy -
- [x] find a name
  - petitnft
- [x] hero background
- [x] first page
  - black and white
  - galaxy theme with earth 3D element (more work because of UV map)
  - portal with old 3D model (has default UV and existing code for three.js also portal could be a good metaphor)

#### First page
- [x] load portal 3D model
  - [x] background color
- [x] title
- [ ] text animation that's sync with portal color

#### Low level
- [x] install tailwind
- [x] install angular material
  - [x] custom theme
- [x] implement dark theme
  - default theme is going to be dark
- [x] add and integrate three js
  - For the first page alone React would be much better 
  - https://medium.com/geekculture/hello-cube-your-first-three-js-scene-in-angular-176c44b9c6c0
  - https://robert-leitl.medium.com/how-to-add-a-glsl-loader-to-an-angular-project-c6b775273f08
  - [x] clean up
  - [x] performance search for window.requestAnimationFrame() in angular

#### The explorer will take an Ethereum address and will display the NFTs owned by that address.

- [x] connect to alchemy
- [x] find a demo address
  - 0x6a71efbC3D99cB376730fbD27FA0a00EFee4810F
  - 0x4c8d55C6E0CE52c6D4AD2B4C408968797823F29B
- [x] make a nft-search-control that connects to alchemy and tries to find nft owned counts

#### Additionally, the page should be graphically pleasant and include an animation or a 3D, metaverse-themed element.

- [x] ~~Art gallery with Three.js?~~
  - too expensive
- [x] cool first page with some 3D element
- [x] import portal 3D scene

#### Extra functionality can be added as long as the core functionality is implemented.
- [ ] personalize dashboard
  - drawer's default size
- [ ] NFT rankings
- [ ] Preferred currency in settings
- [x] come up with a first big heading
  - Explore the other side to the world of [NFTs, Web3, Crypto, Metaverse] (while they change they also affect the portal color)
- [ ] change page's title
- [ ] publish on GitHub page
