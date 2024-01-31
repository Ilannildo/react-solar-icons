import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const MedalStar = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17 8V6c0-1.886 0-2.828-.586-3.414C15.828 2 14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586C7 3.172 7 4.114 7 6v2" stroke="currentColor" strokeWidth={1.5} /><path d="M19.794 11.031a3 3 0 0 0-1.564-2.634l-4.794-2.614a3 3 0 0 0-2.872 0L5.77 8.397a3 3 0 0 0-1.564 2.634v4.938a3 3 0 0 0 1.564 2.634l4.794 2.614a3 3 0 0 0 2.872 0l4.794-2.614a3 3 0 0 0 1.564-2.634V15" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M11.146 11.523c.38-.682.57-1.023.854-1.023.284 0 .474.341.854 1.023l.098.176c.108.194.162.29.246.355.085.063.19.087.4.135l.19.043c.738.167 1.107.25 1.195.533.088.282-.164.576-.667 1.164l-.13.152c-.143.168-.215.251-.247.355-.032.103-.021.214 0 .438l.02.203c.076.784.114 1.177-.115 1.351-.23.175-.576.016-1.267-.302l-.178-.083c-.197-.09-.295-.135-.399-.135-.104 0-.202.045-.399.135l-.178.083c-.691.318-1.037.477-1.267.302-.23-.174-.191-.567-.115-1.351l.02-.204c.021-.223.032-.334 0-.437-.032-.104-.104-.187-.247-.355l-.13-.152c-.503-.588-.755-.882-.667-1.164.088-.283.457-.366 1.195-.533l.19-.043c.21-.048.315-.072.4-.135.084-.064.138-.161.246-.355l.098-.176Z" stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M17 8V6c0-1.886 0-2.828-.586-3.414C15.828 2 14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586C7 3.172 7 4.114 7 6v2" stroke="currentColor" strokeWidth={1.5} /><path d="M10.564 5.783a3 3 0 0 1 2.872 0l4.794 2.614a3 3 0 0 1 1.564 2.634v4.938a3 3 0 0 1-1.564 2.634l-4.794 2.614a3 3 0 0 1-2.872 0L5.77 18.603a3 3 0 0 1-1.564-2.634V11.03A3 3 0 0 1 5.77 8.397l4.794-2.614Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M11.146 11.523c.38-.682.57-1.023.854-1.023.284 0 .474.341.854 1.023l.098.176c.108.194.162.29.246.355.085.063.19.087.4.135l.19.043c.738.167 1.107.25 1.195.533.088.282-.164.576-.667 1.164l-.13.152c-.143.168-.215.251-.247.355-.032.103-.021.214 0 .438l.02.203c.076.784.114 1.177-.115 1.351-.23.175-.576.016-1.267-.302l-.178-.083c-.197-.09-.295-.135-.399-.135-.104 0-.202.045-.399.135l-.178.083c-.691.318-1.037.477-1.267.302-.23-.174-.191-.567-.115-1.351l.02-.204c.021-.223.032-.334 0-.437-.032-.104-.104-.187-.247-.355l-.13-.152c-.503-.588-.755-.882-.667-1.164.088-.283.457-.366 1.195-.533l.19-.043c.21-.048.315-.072.4-.135.084-.064.138-.161.246-.355l.098-.176Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17 8V6c0-1.886 0-2.828-.586-3.414C15.828 2 14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586C7 3.172 7 4.114 7 6v2" stroke="currentColor" strokeWidth={1.5} /><path d="M10.564 5.783a3 3 0 0 1 2.872 0l4.794 2.614a3 3 0 0 1 1.564 2.634v4.938a3 3 0 0 1-1.564 2.634l-4.794 2.614a3 3 0 0 1-2.872 0l-4.795-2.614a3 3 0 0 1-1.563-2.634V11.03a3 3 0 0 1 1.563-2.634l4.795-2.614Z" stroke="currentColor" strokeWidth={1.5} /><path d="M11.146 11.523c.38-.682.57-1.023.854-1.023.284 0 .474.341.854 1.023l.098.176c.108.194.162.29.246.355.085.063.19.087.4.135l.19.043c.738.167 1.107.25 1.195.533.088.282-.164.576-.667 1.164l-.13.152c-.143.168-.215.251-.247.355-.032.103-.021.214 0 .438l.02.203c.076.784.114 1.177-.115 1.351-.23.175-.576.016-1.267-.302l-.178-.083c-.197-.09-.295-.135-.399-.135-.104 0-.202.045-.399.135l-.178.083c-.691.318-1.037.477-1.267.302-.23-.174-.191-.567-.115-1.351l.02-.204c.021-.223.032-.334 0-.437-.032-.104-.104-.187-.247-.355l-.13-.152c-.503-.588-.755-.882-.667-1.164.088-.283.457-.366 1.195-.533l.19-.043c.21-.048.315-.072.4-.135.084-.064.138-.161.246-.355l.098-.176Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10.948 1.25h2.104c.898 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.08.595.08 1.345.08 2.243v1.333l.84.458a3.75 3.75 0 0 1 1.954 3.292v4.938a3.75 3.75 0 0 1-1.955 3.292l-4.794 2.614a3.75 3.75 0 0 1-3.59 0L5.41 19.261a3.75 3.75 0 0 1-1.954-3.292V11.03A3.75 3.75 0 0 1 5.41 7.74l.84-.458V5.948c0-.898 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.344-.08 2.243-.08ZM7.75 6.463l2.455-1.338a3.75 3.75 0 0 1 3.59 0l2.455 1.338V6c0-.964-.002-1.612-.067-2.095-.062-.461-.169-.659-.3-.789-.13-.13-.327-.237-.789-.3-.483-.064-1.13-.066-2.094-.066h-2c-.964 0-1.612.002-2.095.067-.461.062-.659.169-.79.3-.13.13-.237.327-.299.788C7.751 4.388 7.75 5.036 7.75 6v.463Zm5.327-.021a2.25 2.25 0 0 0-2.154 0L6.128 9.056a2.25 2.25 0 0 0-1.172 1.975v4.938c0 .823.45 1.581 1.172 1.975l4.795 2.614a2.25 2.25 0 0 0 2.154 0l4.794-2.614a2.25 2.25 0 0 0 1.173-1.975V11.03a2.25 2.25 0 0 0-1.173-1.975l-4.794-2.614ZM12 11.535c-.058.1-.123.216-.2.353l-.098.176c-.006.013-.014.026-.022.04-.078.144-.208.382-.425.547-.222.168-.488.226-.644.26l-.043.01-.19.042c-.176.04-.319.072-.44.103.079.098.182.219.316.376l.13.152c.01.01.02.022.03.035.108.124.282.325.363.584.08.256.052.52.035.686a3.802 3.802 0 0 0-.005.047l-.02.203c-.018.188-.032.338-.042.46.105-.045.223-.1.364-.165l.179-.082.04-.019c.143-.068.393-.185.672-.185.278 0 .528.117.672.185l.04.019.179.082c.14.065.26.12.363.165-.01-.122-.023-.272-.041-.46l-.02-.203a3.802 3.802 0 0 0-.005-.047c-.017-.166-.045-.43.035-.686.08-.26.255-.46.363-.584l.03-.035.13-.152c.134-.157.237-.278.316-.376-.122-.03-.264-.063-.44-.103l-.19-.043a2.955 2.955 0 0 0-.044-.01c-.155-.033-.422-.091-.643-.26-.217-.164-.347-.402-.426-.545a15.245 15.245 0 0 0-.022-.04l-.098-.177c-.076-.137-.141-.253-.2-.353Zm-.987-1.235c.172-.225.485-.55.987-.55s.814.325.986.55c.165.214.33.511.5.816l.023.042.098.176.057.1.098.023.191.043.047.01c.328.075.654.149.904.247.276.109.65.32.795.785.142.456-.037.841-.194 1.09-.144.23-.364.486-.589.749l-.03.036-.13.152-.083.097.013.135.02.203.004.046c.034.352.067.693.055.965-.013.285-.081.717-.468 1.01-.4.304-.84.238-1.12.158-.258-.074-.563-.215-.87-.356a8.649 8.649 0 0 0-.044-.02l-.178-.082-.085-.04-.085.04-.179.082-.044.02c-.307.141-.611.282-.869.356-.28.08-.72.146-1.12-.157-.387-.294-.456-.726-.468-1.011-.013-.272.02-.613.055-.964l.004-.047.02-.203c.005-.056.01-.099.012-.135a9.83 9.83 0 0 0-.082-.097l-.13-.152-.03-.036c-.226-.263-.445-.52-.59-.75-.156-.248-.335-.633-.193-1.09.144-.463.518-.675.795-.784.25-.098.575-.172.903-.246l.047-.01.191-.044.099-.023.056-.1.099-.176.023-.042c.17-.305.335-.602.5-.816Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M13.436 5.783a3 3 0 0 0-2.872 0L5.769 8.397a3 3 0 0 0-1.563 2.634v4.938a3 3 0 0 0 1.563 2.634l4.795 2.614a3 3 0 0 0 2.872 0l4.794-2.614a3 3 0 0 0 1.564-2.634V11.03a3 3 0 0 0-1.564-2.634l-4.794-2.614ZM12 10.5c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532-.088.283.164.577.667 1.165l.13.152c.143.167.215.25.247.354.032.104.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135.104 0 .202.045.399.135l.178.082c.691.319 1.037.477 1.267.303.23-.174.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438.032-.103.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135-.084-.064-.138-.16-.246-.354l-.098-.176c-.38-.682-.57-1.023-.854-1.023Z" fill="currentColor" /><path d="M11 2h2c1.886 0 2.828 0 3.414.586C17 3.172 17 4.114 17 6v.018l-2.846-1.552a4.5 4.5 0 0 0-4.308 0L7 6.018V6c0-1.886 0-2.828.586-3.414C8.172 2 9.114 2 11 2Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M12.795 2h-2c-1.886 0-2.829 0-3.414.586-.586.586-.586 1.528-.586 3.414v3.5h10V6c0-1.886 0-2.828-.586-3.414C15.623 2 14.681 2 12.795 2Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13.23 5.783a3 3 0 0 0-2.872 0L5.564 8.397A3 3 0 0 0 4 11.031v4.938a3 3 0 0 0 1.564 2.634l4.794 2.614a3 3 0 0 0 2.872 0l4.795-2.614a3 3 0 0 0 1.564-2.634V11.03a3 3 0 0 0-1.564-2.634L13.23 5.783ZM11.794 10.5c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354-.084.064-.19.088-.399.135l-.19.044c-.739.167-1.108.25-1.195.532-.088.283.163.577.666 1.165l.13.152c.144.167.215.25.247.354.032.104.022.215 0 .438l-.02.203c-.076.785-.114 1.178.116 1.352.23.174.575.015 1.266-.303l.179-.082c.196-.09.294-.135.398-.135.104 0 .203.045.399.135l.179.082c.69.319 1.036.477 1.266.303.23-.174.192-.567.116-1.352l-.02-.203c-.022-.223-.033-.334 0-.438.032-.103.103-.187.246-.354l.13-.152c.504-.588.755-.882.667-1.165-.088-.282-.457-.365-1.194-.532l-.191-.044c-.21-.047-.315-.07-.399-.135-.084-.064-.138-.16-.246-.354l-.098-.176c-.38-.682-.57-1.023-.855-1.023Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default MedalStar