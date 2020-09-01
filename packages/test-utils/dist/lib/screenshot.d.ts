import 'dotenv/config';
declare const screenshot: (options?: {
    debug: boolean;
}) => Promise<void>;
export { screenshot };
