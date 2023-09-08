import { PageProps } from '@/types/PageProps';

const parentChildMap: Record<string | number, PageProps[]> = {};
export default function JsonPageArrayer(jsonObject: any[]) {
  jsonObject.forEach((item) => {
    if (!parentChildMap[item.parent_id]) {
      parentChildMap[item.parent_id] = [];
    }
    parentChildMap[item.parent_id].push(item);
  });
}
