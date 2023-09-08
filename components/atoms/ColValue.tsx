export default function ColGroup({
  colnum,
  width,
  classname,
}: {
  colnum: number;
  width: string;
  classname?: string;
}) {
  const colgroup = [];
  for (let i = 0; i < colnum; i++) {
    // <col width={width} className={classname}/>
    colgroup.push(<col width={width} className={classname} />);
  }
  return <colgroup></colgroup>;
}
