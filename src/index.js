
let Vue

export class Store {
    constructor(options = {}) {
        this.options = options;

        //mutations
        this.mutations = options.mutations || {}


        // getter
        this.getters = options.getters || {}
        forEachValue(this.getters, (getterFn, getterName) => {
            _setupGetters(this, getterName, getterFn);
        })
    }

    get state() {
        return this.options.state;
    }
    set state(v) {
        console.log(v);
        throw new Error('state is read only.');
    }
}


// 将对象中的每一个值放入到传入的函数中作为参数执行
function forEachValue(obj, fn) {
    Object.keys(obj).forEach(key => fn(obj[key], key));
}


// 构造getters
function _setupGetters(store, getterName, getterFn) {
    Object.defineProperty(store.getters, getterName, {
        get: () => {
            return getterFn(store.state)
        }
    })
}

function vuexInit() {
    const options = this.$options
    if (options.store) {
        // 组件内部设定了store,则优先使用组件内部的store
        this.$store = typeof options.store === 'function' ?
            options.store() :
            options.store
    } else if (options.parent && options.parent.$store) {
        // 组件内部没有设定store,则从根App.vue下继承$store方法
        this.$store = options.parent.$store
    }
}

export function install (_Vue) {
    Vue = _Vue;
    Vue.mixin({beforeCreate: vuexInit});
}

export default {
    Store,
    install
}