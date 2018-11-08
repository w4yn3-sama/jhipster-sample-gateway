import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { JhipsterSampleGatewaySharedLibsModule, JhipsterSampleGatewaySharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [JhipsterSampleGatewaySharedLibsModule, JhipsterSampleGatewaySharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [JhipsterSampleGatewaySharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleGatewaySharedModule {}
