import { Text } from '@uxoctopus/core';
import classNames from 'classnames';

import { TableHandles } from './types';

const Table: React.FC<TableHandles> = ({
  size = 'sm',
  type = 'fixed',
  rows = [],
  empty,
  theme = 'dark',
  header = [],
  className = '',
  ...rest
}) => {
  const cols = {
    1: 'w-1/12',
    2: 'w-2/12',
    3: 'w-3/12',
    4: 'w-4/12',
    5: 'w-5/12',
    6: 'w-6/12',
    7: 'w-7/12',
    8: 'w-8/12',
  };

  const sizes = header?.map((item) => ({
    col: item.col ? cols[item.col] : 'w-4/12',
    align: item.align || 'left',
    className: item.className || '',
  }));

  const has = rows
    ? rows.length > 0
    : null;

  const styled = {
    row: (index: number) => classNames(
      sizes[index].col,
      sizes[index].align,
      sizes[index].className,
      'px-6 py-3 last:rounded-r-md first:rounded-l-md',
    ),

    base: classNames(
      'table',
      className,
      `is-${size}`,
      `is-${theme}`,
    ),
  };

  return (
    <div
      {...rest}
      className={styled.base}
    >
      {has && (
        <table className={`w-full border-separate table-wrapper ${type === 'auto' ? 'table-auto' : 'table-fixed'}`}>
          <thead className="table-head">
            <tr>
              {header.map((item, index) => (
                <th
                  key={Math.random()}
                  className={`px-6 py-3 last:rounded-r-md first:rounded-l-md ${sizes[index].col} ${sizes[index].className}`}
                >
                  <Text
                    size="xs"
                    align={sizes[index].align}
                    weight="500"
                  >
                    {item.text}
                  </Text>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="table-body">
            {rows?.map(({ id, lines, ...props }) => (
              <tr
                {...props}
                key={id}
                className={props.onClick ? 'cursor-pointer' : ''}
              >
                {lines.map((item, index) => (
                  <td
                    key={Math.random()}
                    role="presentation"
                    title={item?.title || undefined}
                    className={styled.row(index)}
                  >
                    {typeof item.text === 'string'
                      ? (
                        <Text
                          size={size}
                          title={item?.title || ''}
                          align={sizes[index].align}
                          label={item.text}
                        />
                      ) : item.text}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {has === false && <Text label={empty || 'Empty'} className="table-empty" />}
    </div>
  );
};

export default Table;
