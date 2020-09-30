import {Loader} from '../../components/Loader/Loader';
import {$} from '../Dom';
import {getHash} from './router.functions';

export class Router {
  constructor(selector, pages) {
    this.$placeholder = $(selector);
    this.pages = pages || {};
    this.pageChangeHandle = this.pageChangeHandle.bind(this);
    this.loader = new Loader();
  }
  init() {
    window.addEventListener('hashchange', this.pageChangeHandle);
    this.pageChangeHandle();
  }
  async pageChangeHandle() {
    if (this.page) {
      this.page.destroy();
    }
    this.$placeholder.clear().append(this.loader);
    debugger

    const hash = getHash();
    const Page = hash.includes('excel') ?
    this.pages.excel : this.pages.dashboard;
    this.page = new Page(hash);

    const root = await this.page.getRoot();
    this.$placeholder.clear().append(root);

    this.page.afterRender();
  }
  destroy() {
    window.removeEventListener('hashchange', this.pageChangeHandle);
  }
}