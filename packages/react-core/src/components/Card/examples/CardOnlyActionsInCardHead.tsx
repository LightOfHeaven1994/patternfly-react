import React from 'react';
import { Checkbox, Card, CardHeader, CardBody } from '@patternfly/react-core';
import {
  Dropdown as DropdownDeprecated,
  DropdownItem as DropdownItemDeprecated,
  DropdownSeparator,
  KebabToggle
} from '@patternfly/react-core/deprecated';

export const CardOnlyActionsInCardHead: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isChecked, setIsChecked] = React.useState<boolean>(false);

  const onSelect = () => {
    setIsOpen(!isOpen);
  };
  const onClick = (checked: boolean) => {
    setIsChecked(checked);
  };

  const dropdownItems = [
    <DropdownItemDeprecated key="link">Link</DropdownItemDeprecated>,
    <DropdownItemDeprecated key="action" component="button">
      Action
    </DropdownItemDeprecated>,
    <DropdownItemDeprecated key="disabled link" isDisabled>
      Disabled Link
    </DropdownItemDeprecated>,
    <DropdownItemDeprecated key="disabled action" isDisabled component="button">
      Disabled Action
    </DropdownItemDeprecated>,
    <DropdownSeparator key="separator" />,
    <DropdownItemDeprecated key="separated link">Separated Link</DropdownItemDeprecated>,
    <DropdownItemDeprecated key="separated action" component="button">
      Separated Action
    </DropdownItemDeprecated>
  ];

  const headerActions = (
    <>
      <DropdownDeprecated
        onSelect={onSelect}
        toggle={<KebabToggle onToggle={(_event: any, isOpen: boolean) => setIsOpen(isOpen)} />}
        isOpen={isOpen}
        isPlain
        dropdownItems={dropdownItems}
        position={'right'}
      />
      <Checkbox
        isChecked={isChecked}
        onChange={(_event, checked) => onClick(checked)}
        aria-label="card checkbox example"
        id="check-3"
        name="check3"
      />
    </>
  );

  return (
    <Card>
      <CardHeader actions={{ actions: headerActions }} />
      <CardBody>This is the card body. There are only actions in the card head.</CardBody>
    </Card>
  );
};
