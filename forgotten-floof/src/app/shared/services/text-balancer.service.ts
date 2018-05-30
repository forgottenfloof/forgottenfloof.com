import {ElementRef, Injectable} from '@angular/core';

@Injectable()
export class TextBalancerService {
  private candidates: any = [];

  constructor() {
  }

  // pass in a string of selectors to be balanced.
  // if you didn't specify any, that's ok! We'll just
  // balance anything with the balance-text class
  public textBalancer(selectors: string, nativeElement: ElementRef, resize = false) {

    if (!nativeElement) {
      if (!selectors) {
        this.candidates = document.querySelectorAll('.balance-text');
      } else {
        this.createSelectors(selectors, nativeElement);
      }
    }

    if (nativeElement) {
      if (!selectors) {
        this.candidates = nativeElement.nativeElement.querySelectorAll('.balance-text');
      } else {
        this.createSelectors(selectors, nativeElement);
      }
    }

    this.balanceText();

    if (resize) {
      const rebalanceText = this.debounce(() => this.balanceText(), 100);
      window.addEventListener('resize', rebalanceText);
    }
  }

  // this populates our candidates array with dom objects
  // that need to be balanced
  private createSelectors(selectors, element: ElementRef) {
    const selectorArray = selectors.split(',');

    if (!element) {
      for (let i = 0; i < selectorArray.length; i += 1) {
        const currentSelectorElements = document.querySelectorAll(selectorArray[i].trim());

        for (let j = 0; j < currentSelectorElements.length; j += 1) {
          const currentSelectorElement = currentSelectorElements[j];
          this.candidates.push(currentSelectorElement);
        }
      }
    } else {
      for (let i = 0; i < selectorArray.length; i += 1) {
        const currentSelectorElements = element.nativeElement.querySelectorAll(selectorArray[i].trim());

        for (let j = 0; j < currentSelectorElements.length; j += 1) {
          const currentSelectorElement = currentSelectorElements[j];
          this.candidates.push(currentSelectorElement);
        }
      }
    }
  }

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  private debounce(func, wait, immediate?) {
    let timeout;
    return function() {
      const context = this, args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        func.apply(context, args);
      }
    };
  }


  // HELPER FUNCTION -- initializes recursive binary search
  private balanceText() {
    let element;
    let i;

    for (i = 0; i < this.candidates.length; i += 1) {
      element = this.candidates[i];

      if (this.textElementIsMultipleLines(element)) {
        element.style.maxWidth = '';
        this.squeezeContainer(element, element.clientHeight, 0, element.clientWidth);
      }
    }
  }

  // Make the element as narrow as possible while maintaining its current height (number of lines). Binary search.
  private squeezeContainer(element, originalHeight, bottomRange, topRange) {
    let mid;
    if (bottomRange >= topRange) {
      element.style.maxWidth = topRange + 'px';
      return;
    }
    mid = (bottomRange + topRange) / 2;
    element.style.maxWidth = mid + 'px';

    if (element.clientHeight > originalHeight) {
      // we've squoze too far and element has spilled onto an additional line; recurse on wider range
      this.squeezeContainer(element, originalHeight, mid + 1, topRange);
    } else {
      // element has not wrapped to another line; keep squeezing!
      this.squeezeContainer(element, originalHeight, bottomRange + 1, mid);
    }
  }

  // function to see if a headline is multiple lines
  // we only want to break if the headline is multiple lines
  //
  // We achieve this by turning the first word into a span
  // and then we compare the height of that span to the height
  // of the entire headline. If the headline is bigger than the
  // span by 10px we balance the headline.
  private textElementIsMultipleLines(element) {
    let firstWordHeight;
    let elementHeight;
    let elementWords;
    let firstWord;
    let ORIGINAL_ELEMENT_TEXT;

    ORIGINAL_ELEMENT_TEXT = element.innerHTML;

    // Usually there is an approximately 5px discrepancy between
    // the first word and the height of the whole headline,
    // subtract the height of the headline by 10 px
    const HEIGHT_OFFSET = 10;

    // Get all the words in the headline as
    // an array -- will include punctuation
    //
    // this is used to put the headline back together
    elementWords = element.innerHTML.split(' ');

    // Let's make the element first word ID unique
    const FIRST_WORD_ID = `element-first-word-${Math.round(Math.random() * 10000)}`;

    // Make span for first word and give it an id
    // so we can access it in le dom
    firstWord = document.createElement('span');
    firstWord.id = FIRST_WORD_ID;
    firstWord.innerHTML = elementWords[0];

    // This is the entire headline
    // as an array except for first word
    //
    // we will append it to the headline after the span
    elementWords = elementWords.slice(1);

    // Empty the headline and append the span to it
    element.innerHTML = '';
    element.appendChild(firstWord);

    // add the rest of the element back to it
    element.innerHTML += ' ' + elementWords.join(' ');

    // update the first word variable in the dom
    if (document.getElementById(FIRST_WORD_ID)) {
      firstWord = document.getElementById(FIRST_WORD_ID);
    }

    firstWordHeight = firstWord.offsetHeight;
    elementHeight = element.offsetHeight;
    // restore the original element text
    element.innerHTML = ORIGINAL_ELEMENT_TEXT;

    // compare the height of the element and the height of the first word
    return elementHeight - HEIGHT_OFFSET > firstWordHeight;

  } // end headlineIsMultipleLines

}

