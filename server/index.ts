import express, { Request, Response } from 'express';
import next from 'next';

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/sample', (req: Request, res: Response) => {
    return app.render(req, res, '/sample');
  });

  server.get('/b', (req: Request, res: Response) => {
    return app.render(req, res, '/b', req.params);
  });

  server.all('*', (req: Request, res: Response) => {
    // console.log('req.path == ', req.path);
    return handle(req, res);
  });

  server.listen(port, (err?: any) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
