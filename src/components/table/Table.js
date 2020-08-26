import {ExcelComponent} from '../../core/ExcelComponent';

export class Table extends ExcelComponent {
  // static className = 'excel__table';
  constructor($root) {
    super($root, {
      name: 'table',
      listeners: ['click']
    });
  }
  toHTML() {
    return `
    <div class="excel__table-row">
      <div class="excel__table-row-info">  </div>
      <div class="excel__table-row-data">
          <div class="excel__table-data-column">
              A
          </div>
          <div class="excel__table-data-column">
              B
          </div>
          <div class="excel__table-data-column">
              C
          </div>
        </div>
    </div>

    <div class="excel__table-row">
        <div class="excel__table-row-info">1</div>
        <div class="excel__table-row-data">
          <div class="excel__table-data-ceil selected" contenteditable>
              
          </div>
          <div class="excel__table-data-ceil" contenteditable>
              
          </div>
          <div class="excel__table-data-ceil" contenteditable>
              
          </div>
          
        </div>
    </div>
    <div class="excel__table-row">
    <div class="excel__table-row-info">2</div>
    <div class="excel__table-row-data">
      <div class="excel__table-data-ceil " contenteditable>
          
      </div>
      <div class="excel__table-data-ceil" contenteditable>
          
      </div>
      <div class="excel__table-data-ceil" contenteditable>
          
      </div>
      
    </div>
</div>
    
    
    `;
  }
}