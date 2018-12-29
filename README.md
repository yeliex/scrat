# scrat
redux base framework support async/await

## Readme
scrat is a redux base framework that help use redux better in react (maybe vue.js as well in the future, who knows).

## Features
- **Easy to learn, easy to use** explain redux simple, and make it easy to use
- **Async support** support async/await
- **Provide utils** provide many utils to extend effects(like pagination or progress)
- **Complicate with dva** fully complicate with dva.js, and do better 
- **Focus on store** focus on store, use router framework you like(scrat don`t provide router instance)

## WHY NOT DVA.JS
- Scrat support async/await, instead of generator
- Scrat provide many utils to extend effects
- Scrat focus on store implementation, it don`t provide router instance. Use any router framework you like
- <del>Scrat support Vue.js</del>(Maybe)

## Installation
```bash
npm install @scrat/react --save
OR
yarn add @scrat/react
```

## Usage
```javascript
import Store from '@scrat/react';

const store = new Store();

Store.model({
  namespaces: 'app',
  state: {}, // initial state
  reducer: {
    dump(store, {title}){
      return {
        ...store,
        title,
      }
    }
  },
  effects: {
    async setTitle({title}){
      this.dump({
        title
      });
    },
  },
});

(async () => {
  await store.app.setTitle({
    title: 'test page'
  });
})();
```
