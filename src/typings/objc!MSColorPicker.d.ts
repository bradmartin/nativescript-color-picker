
interface HSB {
	hue: number;
	saturation: number;
	brightness: number;
	alpha: number;
}
declare var HSB: interop.StructType<HSB>;

declare var MSAlphaComponentMaxValue: number;

declare class MSColorComponentView extends UIControl {

	static alloc(): MSColorComponentView; // inherited from NSObject

	static appearance(): MSColorComponentView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MSColorComponentView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MSColorComponentView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MSColorComponentView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MSColorComponentView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MSColorComponentView; // inherited from UIAppearance

	static new(): MSColorComponentView; // inherited from NSObject

	format: string;

	maximumValue: number;

	minimumValue: number;

	title: string;

	value: number;

	setColors(colors: NSArray<any> | any[]): void;
}

declare function MSColorFromHexString(hexString: string): UIColor;

declare var MSColorPickerVersionNumber: number;

declare var MSColorPickerVersionString: interop.Reference<number>;

declare class MSColorSelectionView extends UIView implements MSColorView {

	static alloc(): MSColorSelectionView; // inherited from NSObject

	static appearance(): MSColorSelectionView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MSColorSelectionView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MSColorSelectionView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MSColorSelectionView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MSColorSelectionView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MSColorSelectionView; // inherited from UIAppearance

	static new(): MSColorSelectionView; // inherited from NSObject

	readonly selectedIndex: MSSelectedColorView;

	color: UIColor; // inherited from MSColorView

	readonly debugDescription: string; // inherited from NSObjectProtocol

	delegate: MSColorViewDelegate; // inherited from MSColorView

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setSelectedIndexAnimated(index: MSSelectedColorView, animated: boolean): void;
}

declare class MSColorSelectionViewController extends UIViewController {

	static alloc(): MSColorSelectionViewController; // inherited from NSObject

	static new(): MSColorSelectionViewController; // inherited from NSObject

	color: UIColor;

	delegate: MSColorSelectionViewControllerDelegate;
}

interface MSColorSelectionViewControllerDelegate extends NSObjectProtocol {

	colorViewControllerDidChangeColor(colorViewCntroller: MSColorSelectionViewController, color: UIColor): void;
}
declare var MSColorSelectionViewControllerDelegate: {

	prototype: MSColorSelectionViewControllerDelegate;
};

interface MSColorView extends NSObjectProtocol {

	color: UIColor;

	delegate: MSColorViewDelegate;
}
declare var MSColorView: {

	prototype: MSColorView;
};

interface MSColorViewDelegate extends NSObjectProtocol {

	colorViewDidChangeColor(colorView: MSColorView, color: UIColor): void;
}
declare var MSColorViewDelegate: {

	prototype: MSColorViewDelegate;
};

declare class MSColorWheelView extends UIControl {

	static alloc(): MSColorWheelView; // inherited from NSObject

	static appearance(): MSColorWheelView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MSColorWheelView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MSColorWheelView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MSColorWheelView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MSColorWheelView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MSColorWheelView; // inherited from UIAppearance

	static new(): MSColorWheelView; // inherited from NSObject

	hue: number;

	saturation: number;
}

declare function MSHSB2RGB(hsb: HSB): RGB;

declare var MSHSBColorComponentMaxValue: number;

declare class MSHSBView extends UIView implements MSColorView {

	static alloc(): MSHSBView; // inherited from NSObject

	static appearance(): MSHSBView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MSHSBView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MSHSBView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MSHSBView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MSHSBView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MSHSBView; // inherited from UIAppearance

	static new(): MSHSBView; // inherited from NSObject

	color: UIColor; // inherited from MSColorView

	readonly debugDescription: string; // inherited from NSObjectProtocol

	delegate: MSColorViewDelegate; // inherited from MSColorView

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare function MSHexStringFromColor(color: UIColor): string;

declare function MSRGB2HSB(rgb: RGB): HSB;

declare var MSRGBColorComponentMaxValue: number;

declare function MSRGBColorComponents(color: UIColor): RGB;

declare class MSRGBView extends UIView implements MSColorView {

	static alloc(): MSRGBView; // inherited from NSObject

	static appearance(): MSRGBView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MSRGBView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MSRGBView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MSRGBView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MSRGBView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MSRGBView; // inherited from UIAppearance

	static new(): MSRGBView; // inherited from NSObject

	color: UIColor; // inherited from MSColorView

	readonly debugDescription: string; // inherited from NSObjectProtocol

	delegate: MSColorViewDelegate; // inherited from MSColorView

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum MSSelectedColorView {

	RGB = 0,

	HSB = 1
}

declare class MSSliderView extends UIControl {

	static alloc(): MSSliderView; // inherited from NSObject

	static appearance(): MSSliderView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MSSliderView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MSSliderView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MSSliderView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MSSliderView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MSSliderView; // inherited from UIAppearance

	static new(): MSSliderView; // inherited from NSObject

	maximumValue: number;

	minimumValue: number;

	value: number;

	setColors(colors: NSArray<any> | any[]): void;
}

declare class MSThumbView extends UIControl {

	static alloc(): MSThumbView; // inherited from NSObject

	static appearance(): MSThumbView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MSThumbView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MSThumbView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MSThumbView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MSThumbView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MSThumbView; // inherited from UIAppearance

	static new(): MSThumbView; // inherited from NSObject

	readonly gestureRecognizer: UIGestureRecognizer;
}

interface RGB {
	red: number;
	green: number;
	blue: number;
	alpha: number;
}
declare var RGB: interop.StructType<RGB>;
