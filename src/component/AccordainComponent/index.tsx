import React from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import { COLORS } from '../../constant';
import { ViewStyle } from 'react-native';

const AccordionComponent = ({
  sections,
  renderHeader,
  renderContent,
  expandMultiple,
  oneExpand,
  containerStyle,
}: {
  sections: any[];
  renderHeader: any;
  renderContent: any;
  expandMultiple: boolean;
  oneExpand: boolean;
  containerStyle: ViewStyle;
}) => {
  const [activeSections, setActiveSections] = React.useState(
    oneExpand ? [0] : [],
  );

  const updateSections = (activeSections: any[]) => {
    setActiveSections(activeSections);
  };
  return (
    <Accordion
      containerStyle={containerStyle}
      sections={sections}
      onChange={updateSections}
      renderHeader={renderHeader}
      underlayColor={COLORS.white}
      renderContent={renderContent}
      expandMultiple={expandMultiple}
      activeSections={activeSections}
    />
  );
};

export default AccordionComponent;
