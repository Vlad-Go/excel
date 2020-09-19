import {$} from '../Dom';
import {getHash} from './router.functions';

export class Router {
  constructor(selector, pages) {
    this.$placeholder = $(selector);
    this.pages = pages || {};
    this.pageChangeHandle = this.pageChangeHandle.bind(this);
  }
  init() {
    window.addEventListener('hashchange', this.pageChangeHandle);
    this.pageChangeHandle();
  }
  pageChangeHandle() {
    if (this.page) {
      this.page.destroy();
    }
    this.$placeholder.clear();

    const Page = getHash().includes('excel') ?
    this.pages.excel : this.pages.dashboard;
    this.page = new Page();

    this.$placeholder.append(this.page.getRoot());

    this.page.afterRender();
  }
  destroy() {
    window.removeEventListener('hashchange', this.pageChangeHandle);
  }
}