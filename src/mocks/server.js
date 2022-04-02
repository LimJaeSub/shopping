import {setupServer} from 'msw/node';
import { handlers } from './handler';


//beforeAll(()=>server.listen()) : start server
//afterEach(()=>server.resetHandlers()) : reset handler (test finish)
//afterAll(()=>server.close()) : 
//mocking server 생성
export const server = setupServer(...handlers);