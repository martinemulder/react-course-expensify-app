import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment';

test('Should set the text filter', () => {
    const action = setTextFilter('Test');
    expect(action).toEqual({
        type: 'FILTER_TEXT',
        text: 'Test'
    });
});

test('Should set the text filter to the default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'FILTER_TEXT',
        text: ''
    });
});

test('Should sort by amount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('Should sort by date', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('Should set the start date', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    });
});

test('Should set the end date', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    });
});