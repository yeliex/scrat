import { ReducersMapObject, AnyAction } from 'redux';
import * as assert from 'assert';

export interface InitialState {
    [key: string]: any
}

export interface EffectsCommandMap {
    put: <A extends AnyAction>(action: A) => any,
    call: Function,
    select: Function,
    take: Function,
    cancel: Function,

    [key: string]: any,
}

export type Effect = (action: AnyAction, effects: EffectsCommandMap) => void;

export interface EffectsMapObject {
    [key: string]: Effect;
}

export interface ModelDefine<InitialState, ReducersMapObject, EffectsMapObject> {
    namespace: string;
    state?: InitialState;
    reducer?: ReducersMapObject;
    effects?: EffectsMapObject;
}

export default class Store {
    private modelMap = {};

    private readonly modelProxy = new Proxy(this.modelMap, {
        get(target: {}, p: string): any {
            const [modelName, methodName] = p.split(',');


        },
    });

    constructor(props) {

    }

    get models() {
        return this.modelProxy;
    }

    define<T1 = InitialState, T2 = ReducersMapObject, T3 = EffectsMapObject>(model: ModelDefine<T1, T2, T3>): void {
        assert(typeof model.namespace === 'string' && model.namespace !== '', 'model.namespace must be valid string');

    }

    use(hook): void {

    }


}
