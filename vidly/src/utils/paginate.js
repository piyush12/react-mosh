import _ from 'lodash';

export function paginate(items, pageNumber, size){
    const startIndex = (pageNumber-1)*size;
    return _(items).slice(startIndex).take(size).value()
}