// Stwórz funkcję paginateArray
const paginateArray = (dataEntries, settings) => {
    if (!Array.isArray(dataEntries)) {
        throw new TypeError("First argument must be of type array");
    }

    if (!(typeof settings == "object" && settings !== null) ||
        !('actualPageIdx' in settings) || !('entriesOnPage' in settings)) {

        throw new TypeError("Second argument must be of type object containing 'actualPageIdx' and 'entriesOnPage' keys");
    }

    const { actualPageIdx, entriesOnPage } = settings;

    if ((!Number.isInteger(actualPageIdx) && actualPageIdx < 0) ||
        (!Number.isInteger(entriesOnPage) && entriesOnPage < 0)) {
        throw new TypeError("Values in second argument's keys must be 0 or positive Integer")
    }

    let firstPageElementIdx = actualPageIdx * entriesOnPage;
    let lastPageElementIdx = firstPageElementIdx + entriesOnPage;

    const entriesOnSelectedPage = dataEntries.slice(firstPageElementIdx, lastPageElementIdx);
    return entriesOnSelectedPage;
}

// która przyjmuję array do paginacji dataEntries oraz settings o kluczach { actualPageIdx=9, entriesOnPage=50 }
// - actualPageIdx to index wybranej strony
// - entriesOnPage to maksymalna zwracana ilość elementów z dataEntries dla wybranej strony

// który zwraca entriesOnSelectedPage:
// - entriesOnSelectedPage to array z odpowiednią ilością elementów z danej strony

