import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adaptersHTTP/axios.adapter';

@Module({
    providers: [AxiosAdapter],
    exports: [AxiosAdapter]
})
export class CommonModule {}
