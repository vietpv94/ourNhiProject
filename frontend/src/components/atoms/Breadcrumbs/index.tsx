import * as React from 'react';
import { BreadcrumbsWrapper } from './style';
import { ArrowIcon } from './arrow';
import { IBox } from '@Components/molecules/BinaryMLM/Card';

export interface IBreadcrumbsProps {
    data: string[],
    onClick: (email: string) => void,
}

export function Breadcrumbs({data, onClick}: IBreadcrumbsProps) {
    return (
        <BreadcrumbsWrapper>
        {data && data.map((item, index) => {
          return (
            <div key={index}>
              <div className="item" onClick={() => {
                  onClick(item)
              }}>
             
                  {item}
              </div>
              {index !== data.length - 1 && (
                <ArrowIcon type="outline" direction="right" />
              )}
            </div>
          );
        })}
      </BreadcrumbsWrapper>
    ) 
}
