import { reactive } from 'vue';

export const store = reactive(
    {
        cardListApi: [],
        archetypeListApi: [],
        filterSelection: '',
        loading: true,
    }
);