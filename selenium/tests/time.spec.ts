
import {expect} from 'chai';
import {createDriver} from '../utils/selenium-setup';
import {TimePage} from '../pages/time.page';

describe('E2E',()=>{
 let d, p;
 before(async()=>{ d=await createDriver(); p=new TimePage(d); });
 after(async()=>{ await d.quit(); });
 it('adds entry', async()=>{
   await p.nav();
   await p.add('Max','2024-01-01T09:00','2024-01-01T17:00');
   await d.sleep(300);
   const rows=await d.findElements({css:'ul li'});
   expect(rows.length).to.be.greaterThan(0);
 });
});
