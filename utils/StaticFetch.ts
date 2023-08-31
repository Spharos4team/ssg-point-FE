import Pages from "@/data/page.data.json";

export const staticPageFetch = {
  getOnePageByParentId: (parentId: number) => {
    return Pages.find((page) => page.id === parentId);
  },

  getChildrenPageByParentId: (parentId: number) => {
    return Pages.filter((child) => child.parent_id === parentId);
  },

  getPageSetByParentId: (parentId: number) => {
    const parentPage = Pages.find((page) => page.id === parentId);
    const childrenPages = Pages.filter((child) => child.parent_id === parentId);

    const pageSet = [parentPage, ...childrenPages];
    return pageSet;
  },

  getPagesByIdList: (idList: number[]) => {
    const pageMap = new Map(Pages.map((page) => [page.id, page]));
    const resultPages = idList.map((id) => pageMap.get(id));
    return resultPages.filter((page) => page !== undefined);
  },

  getParentandChildrenByCurrPath: (currPath: string) => {
    const currentPage = Pages.find((page) => page.pathname == currPath);
    if (!currentPage) return [];

    const parentPage = Pages.find((page) => page.id == currentPage.parent_id);
    if (!parentPage) return [];

    const childrenPages = Pages.filter(
      (page) => page.parent_id == parentPage.id
    );
    const sortedChildrenPages = [...childrenPages].sort((a, b) => a.id - b.id);

    return sortedChildrenPages;
  },
};
