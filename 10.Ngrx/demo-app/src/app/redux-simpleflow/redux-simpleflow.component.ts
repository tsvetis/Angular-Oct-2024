import { Component } from '@angular/core';

@Component({
  selector: 'app-redux-simpleflow',
  standalone: true,
  imports: [],
  templateUrl: './redux-simpleflow.component.html',
  styleUrl: './redux-simpleflow.component.css',
})
export class ReduxSimpleflowComponent {
  demoFn(): void {
    // Redux -> Pattern
    //  - State -> Single source of truth
    //  - Action -> Modify our data
    //
    // How do we change the state?
    //  - never touch the state directly
    //  - we dispatch an Action
    //
    // Reducer -> captures all actions that are for dispatch and can react to them
    //
    // Simple Analogy
    // const actionsCollection = [10, 20, 30];
    // const reducer = (acc: number, current: number) => acc + current;
    // const initialState = 0;
    // const result = actionsCollection.reduce(reducer, initialState);
    // console.log(result);
    //
    // Complex Example

    interface AppState {
      msg: string;
      person: Object;
      isAuth: boolean;
    }

    // Default state
    const initialState: AppState = {
      msg: '',
      person: {},
      isAuth: false,
    };

    // Actions
    const WRITE_MSG = 'WRITE_MSG';
    const INIT_PERSON_OBJECT = 'INIT_PERSON_OBJECT';
    const CHECK_IS_AUTH = 'CHECK_IS_AUTH';

    // Reducer
    const reducer = (state: AppState, action: any) => {
      switch (action.type) {
        case WRITE_MSG:
          return { ...state, msg: action.value };
        case INIT_PERSON_OBJECT:
          return { ...state, person: action.value };
        case CHECK_IS_AUTH:
          return { ...state, isAuth: action.value };

        default:
          return state;
      }
    };

    // Event collection
    const eventCollection = [
      { type: WRITE_MSG, value: 'This is my Message!' },
      {
        type: INIT_PERSON_OBJECT,
        value: { name: 'Pesho', age: 25, geneder: 'M' },
      },
      { type: CHECK_IS_AUTH, value: true },
    ];

    const result = eventCollection.reduce(reducer, initialState);
    // console.log({ result });

    // Enforces Uni-directional data flow
    // Flat - objects => good
  }
}
