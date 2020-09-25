import request from '../src/utils/request';
import { purchasingPrefix } from '../constants';

/**
 * block start
 */
export async function executeImportPurOrder(params) {
  return request.post(`${purchasingPrefix}/order/import`, {
    data: params,
  });
}

export const batchImportPurOrderByFile = `${purchasingPrefix}/order/upload`;
/**
 * block end
 */
