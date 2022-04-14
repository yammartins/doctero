import { useState } from 'react';

import { Button, Text } from '@uxoctopus/core';
import classNames from 'classnames';

import { Extend } from '~/assets';

import Cols from './cols';
import View from './styles';
import { TableHandles } from './types';

const Table: React.FC<TableHandles> = ({
  size = 'sm',
  type = 'fixed',
  rows = [],
  empty,
  theme = 'dark',
  header = [],
  className = '',
  open,
  ...rest
}) => {
  const [show, onShow] = useState(-1);

  const cols = {
    1: 'w-1-12',
    2: 'w-2-12',
    3: 'w-3-12',
    4: 'w-4-12',
    5: 'w-5-12',
    6: 'w-6-12',
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
      'table-body-row',
    ),

    base: classNames(
      'table',
      className,
      `is-${size}`,
      `is-${theme}`,
    ),
  };

  return (
    <View>
      <div
        {...rest}
        className={styled.base}
      >
        {has && (
          <table className={`table-wrapper ${type === 'auto' ? 'auto' : 'fixed'}`}>
            <thead className="table-head">
              <tr className="table-head-row">
                <Cols>
                  {header.map((item, index) => (
                    <th
                      key={Math.random()}
                      className={`header-row px-6 py-3 last:rounded-r-md first:rounded-l-md ${sizes[index].col} ${sizes[index].className}`}
                    >
                      <Text
                        size="sm"
                        align={sizes[index].align}
                        weight="500"
                      >
                        {item.text}
                      </Text>
                    </th>
                  ))}
                </Cols>
              </tr>
            </thead>

            <tbody className="table-body">
              {rows?.map(({
                id, lines, details, ...props
              }) => (
                <tr
                  {...props}
                  key={id}
                  className={`table-body-general ${show === id ? 'is-extend' : ''}`}
                >
                  <Cols>
                    {lines.map((item, index) => (
                      <td
                        key={Math.random()}
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
                    <td className="extend">
                      {show === id ? (
                        <Extend
                          onClick={() => onShow(-1)}
                          className="active"
                        />
                      ) : (
                        <Extend
                          onClick={() => onShow(id as number)}
                        />
                      )}
                    </td>
                  </Cols>
                  {details?.map(({
                    id: id_details, name, email, position, CPF, address, phone,
                  }) => (
                    <td className={`details ${show === id ? 'is-show' : ''}`} key={id_details}>
                      <div className="user-data-wrapper">
                        <Text
                          size="xs"
                          className="user-data-wrapper-itens"
                        >
                          Nome completo:
                          <span>{name}</span>
                        </Text>
                        <Text
                          size="xs"
                          className="user-data-wrapper-itens"
                        >
                          CPF:
                          <span>{CPF}</span>
                        </Text>
                        <Text
                          size="xs"
                          className="user-data-wrapper-itens"
                        >
                          Telefone:
                          <span>{phone}</span>
                        </Text>
                        <Text
                          size="xs"
                          className="user-data-wrapper-itens"
                        >
                          E-mail:
                          <span>{email}</span>
                        </Text>
                        <Text
                          size="xs"
                          className="user-data-wrapper-itens"
                        >
                          Endereço:
                          <span>{address}</span>
                        </Text>
                        <Text
                          size="xs"
                          className="user-data-wrapper-itens"
                        >
                          Posição:
                          <span>{position}</span>
                        </Text>
                      </div>
                      <div className="buttons">
                        <Button className="confirm" icon="check" />
                        <Button className="delete" icon="x" />
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {has === false && <Text label={empty || 'Empty'} className="table-empty" />}
      </div>
    </View>
  );
};

export default Table;
