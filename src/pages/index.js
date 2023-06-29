import React from "react";
import theme from "theme";
import { Theme, Link, Box, Section, Text, Image, LinkBox, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Be kind be gestures - Tech of Kind and For Kind
			</title>
			<meta name={"description"} content={"Kind Gestures Tech is a forward-thinking technology firm that dedicates its resources to the development of digital tools for mental wellbeing and health. Since its establishment, it has strived to create a world where technology doesn't merely serve our physical needs, but also empowers us to nurture our mental health, using the mantra \"Be Kind and Be Gestures\" to guide their innovations."} />
			<meta property={"og:title"} content={"Be kind be gestures - Tech of Kind and For Kind"} />
			<meta property={"og:description"} content={"Kind Gestures Tech is a forward-thinking technology firm that dedicates its resources to the development of digital tools for mental wellbeing and health. Since its establishment, it has strived to create a world where technology doesn't merely serve our physical needs, but also empowers us to nurture our mental health, using the mantra \"Be Kind and Be Gestures\" to guide their innovations."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/615c316435c5c8001f775568/images/wedding%20template.png?v=2021-10-05T11:13:30.358Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/615c316435c5c8001f775568/images/openmoji_couple-with-heart32.png?v=2021-10-05T11:11:03.451Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/615c316435c5c8001f775568/images/openmoji_couple-with-heart152.png?v=2021-10-05T11:11:13.507Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/615c316435c5c8001f775568/images/openmoji_couple-with-heart152.png?v=2021-10-05T11:11:13.507Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/615c316435c5c8001f775568/images/openmoji_couple-with-heart152.png?v=2021-10-05T11:11:13.507Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/615c316435c5c8001f775568/images/openmoji_couple-with-heart152.png?v=2021-10-05T11:11:13.507Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/615c316435c5c8001f775568/images/openmoji_couple-with-heart270.png?v=2021-10-05T11:11:22.612Z"} />
			<meta name={"msapplication-TileColor"} content={"#30251F"} />
		</Helmet>
		<Section padding="47px 0 47px 0">
			<Override slot="SectionContent" flex-direction="row" />
			<Box
				width="40%"
				sm-width="50%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
			>
				<Link
					href="/"
					font="400 28px/1.5 --fontFamily-googleMarcellus"
					color="--secondary"
					text-decoration-line="initial"
					md-font="400 24px/1.5 --fontFamily-googleMarcellus"
				>
					Kind Gestures
				</Link>
			</Box>
			<Box
				empty-border-width="1px"
				width="60%"
				justify-content="flex-end"
				empty-min-height="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				align-items="center"
				empty-min-width="64px"
			>
				<Components.QuarklycommunityKitMobileSidePanel>
					<Override slot="Button Text" md-color="--coralD1" md-font="--lead" />
					<Override slot="Button Text :closed">
						Menu
					</Override>
					<Override slot="Button Icon" md-color="--coralD1" />
					<Override slot="Content" background="none" padding="0px 0px 0px 0px" />
					<Override slot="Button Text :open">
						Menu
					</Override>
					<Box
						justify-content="space-between"
						md-flex-direction="column"
						md-align-items="center"
						md-background="--color-pageBg"
						md-padding="20px 0px 20px 0px"
						display="flex"
					>
						<Link
							transition="opacity 0.3s ease-in-out 0s"
							hover-opacity=".8"
							href="#"
							color="--darkL2"
							font="--lead"
							text-decoration-line="initial"
							padding="8px 8px 8px 8px"
						>
							Team
						</Link>
						<Link
							color="--darkL2"
							font="--lead"
							text-decoration-line="initial"
							padding="8px 8px 8px 8px"
							transition="opacity 0.3s ease-in-out 0s"
							hover-opacity=".8"
							href="#"
						>
							Our Portfolio
						</Link>
						<Link
							href="#"
							color="--darkL2"
							font="--lead"
							text-decoration-line="initial"
							padding="8px 8px 8px 8px"
							transition="opacity 0.3s ease-in-out 0s"
							hover-opacity=".8"
						>
							Join us
						</Link>
						<Link
							href="#"
							color="--darkL2"
							font="--lead"
							text-decoration-line="initial"
							padding="8px 8px 8px 8px"
							transition="opacity 0.3s ease-in-out 0s"
							hover-opacity=".8"
						>
							Take the Test
						</Link>
						<Link
							text-decoration-line="initial"
							padding="8px 8px 8px 8px"
							transition="opacity 0.3s ease-in-out 0s"
							hover-opacity=".8"
							href="#"
							color="--darkL2"
							font="--lead"
						>
							Contact
						</Link>
					</Box>
				</Components.QuarklycommunityKitMobileSidePanel>
			</Box>
		</Section>
		<Section padding="68px 0 68px 0" md-padding="0px 0 28px 0">
			<Override slot="SectionContent" md-flex-direction="column" flex-direction="row" />
			<Box
				empty-border-width="1px"
				empty-border-color="LightGray"
				md-position="relative"
				lg-margin="0px 0px 0px 0px"
				empty-min-width="64px"
				width="50%"
				flex-direction="column"
				padding="0px 120px 0px 0px"
				lg-padding="0px 0px 0px 0px"
				empty-border-style="solid"
				margin="0px 60px 0px 0px"
				display="flex"
				align-items="flex-start"
				empty-min-height="64px"
				justify-content="space-between"
				md-width="100%"
			>
				<Text
					md-width="80%"
					sm-width="100%"
					margin="0px 0px 40px 0px"
					font="--headline1"
					color="--secondary"
					lg-font="normal 500 50px/1.3 &quot;Marcellus&quot;, serif"
					lg-margin="0px 0px 16px 0px"
					md-font="normal 500 40px/1.3 &quot;Marcellus&quot;, serif"
				>
					Be kind
					<br />
					Gestures
				</Text>
				<Text
					margin="0px 0px 60px 0px"
					font="--lead"
					color="--darkL2"
					md-font="normal 400 16px/1.5 &quot;Marcellus&quot;, serif"
					md-margin="0px 0px 32px 0px"
				>
					Kind Gestures Tech is a forward-thinking technology firm that dedicates its resources to the development of digital tools for mental wellbeing and health. Since its establishment, it has strived to create a world where technology doesn't merely serve our physical needs, but also empowers us to nurture our mental health, using the mantra "Be Kind and Be Gestures" to guide their innovations.
				</Text>
				<LinkBox
					sm-top="745px"
					border-color="--color-secondary"
					border-radius="500%"
					hover-color="--pageBg"
					href="#work"
					hover-opacity=".7"
					padding="0px 0px 0px 0px"
					md-bottom="0px"
					position="relative"
					color="--secondary"
					md-width="100%"
					md-top="705px"
					md-min-height="110px"
					align-items="center"
					md-position="absolute"
					sm-width="100%"
				>
					<Image height="32px" src="https://uploads.quarkly.io/615c316435c5c8001f775568/images/arrowbutton.svg?v=2021-11-01T20:27:13.301Z" position="absolute" width="32px" />
					<Components.RotateImage>
						<Image src="https://uploads.quarkly.io/615c316435c5c8001f775568/images/button.svg?v=2021-11-01T20:22:49.058Z" width="168px" height="168px" />
					</Components.RotateImage>
				</LinkBox>
			</Box>
			<Box
				empty-min-width="64px"
				empty-border-style="solid"
				md-margin="0px 0px 0px 0px"
				md-width="100%"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				width="50%"
				margin="0px 0px 0px 60px"
			>
				<Image
					src="https://images.unsplash.com/photo-1687983545682-6ada0d7e6a9c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
					object-fit="cover"
					lg-min-height="481px"
					max-height="616px"
					width="100%"
					object-position="0% 70%"
					md-max-height="410px"
					md-min-height="none"
					md-margin="0px 0px 150px 0px"
				/>
			</Box>
		</Section>
		<Section padding="68px 0 68px 0" md-padding="0px 0 28px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-direction="column" />
			<Box
				empty-min-width="64px"
				align-items="flex-start"
				lg-padding="0px 0px 0px 0px"
				md-width="100%"
				empty-min-height="64px"
				empty-border-width="1px"
				margin="0px 60px 0px 0px"
				display="flex"
				md-position="relative"
				lg-margin="0px 0px 0px 0px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="50%"
				flex-direction="column"
				justify-content="space-between"
			>
				<Image
					width="100%"
					object-fit="cover"
					margin="0px 0px 40px 0px"
					min-height="557px"
					md-max-height="388px"
					md-min-height="none"
					src="https://images.unsplash.com/photo-1687777237163-4a7f524f9b70?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
				/>
				<Text
					margin="0px 0px 40px 0px"
					font="--headline2"
					color="--secondary"
					lg-font="normal 500 32px/1.3 &quot;Marcellus&quot;, serif"
					lg-margin="0px 0px 16px 0px"
					md-font="normal 500 28px/1.3 &quot;Marcellus&quot;, serif"
				>
					Built on kindness
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					font="--lead"
					color="--darkL2"
					md-font="normal 400 16px/1.5 &quot;Marcellus&quot;, serif"
					md-margin="0px 0px 40px 0px"
				>
					One of their flagship products is a mobile application named 'Compassion Companion'. This app uses sophisticated algorithms to analyze user inputs such as daily journals, mood trackers, and self-report surveys. By assessing these data points, it offers personalized coping strategies and resources, from guided meditation sessions to cognitive behavioral therapy exercises. The application is built on a foundation of empathy and understanding, ensuring that each user feels heard, seen, and cared for.
				</Text>
			</Box>
			<Box
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				md-width="100%"
				md-margin="0px 0px 0px 0px"
				empty-min-width="64px"
				width="50%"
				margin="0px 0px 0px 60px"
				empty-min-height="64px"
			>
				<Text
					font="--headline2"
					color="--secondary"
					lg-font="normal 500 32px/1.3 &quot;Marcellus&quot;, serif"
					md-font="normal 500 28px/1.3 &quot;Marcellus&quot;, serif"
					lg-margin="0px 0px 16px 0px"
					margin="0px 0px 40px 0px"
				>
					Indifference
				</Text>
				<Text md-font="normal 400 16px/1.5 &quot;Marcellus&quot;, serif" margin="0px 0px 40px 0px" font="--lead" color="--darkL2">
					The firm is recognized for its innovative approach to bridging the gap between technology and mental wellness. Its primary focus is to integrate the potential of artificial intelligence and machine learning in developing tools that provide a human-like understanding of individual mental health issues, enabling personalized care and attention.
				</Text>
				<Image
					md-min-height="none"
					src="https://images.unsplash.com/photo-1687867117790-b8e008fb5f76?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
					width="100%"
					object-fit="cover"
					object-position="0% 70%"
					min-height="400px"
					md-max-height="329px"
				/>
			</Box>
		</Section>
		<Section background="--color-sectionBg" padding="80px 0 80px 0" md-padding="40px 0 40px 0">
			<Text
				margin="0px 0px 40px 20%"
				font="--headline2"
				color="--secondary"
				lg-font="normal 500 32px/1.3 &quot;Marcellus&quot;, serif"
				lg-margin="0px 0px 24px 15%"
				md-margin="0px 0px 24px 0px"
			>
				Wear kind gestures{" "}
			</Text>
			<Image
				object-fit="cover"
				margin="0px 0px 40px 0px"
				max-height="600px"
				lg-max-height="322px"
				lg-margin="0px 0px 24px 0px"
				src="https://images.unsplash.com/photo-1682685797828-d3b2561deef4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
				width="100%"
			/>
			<Text margin="0px 0px 0px 0px" font="--lead" color="--darkL2" max-width="540px">
				In addition, Kind Gestures Tech's pioneering product, 'Be Gestures', is a wearable device that monitors physiological signs of stress and anxiety. It offers real-time feedback and guides the user towards calming practices such as deep-breathing exercises, mindfulness techniques, and gentle reminders to take breaks. The goal is to help individuals better manage their emotional wellbeing, reducing stress levels and enhancing their overall quality of life.
			</Text>
		</Section>
		<Section
			padding="160px 0 50px 0"
			lg-padding="100px 0 50px 0"
			sm-padding="40px 0 40px 0"
			md-padding="40px 0 50px 0"
			height="auto"
		>
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" display="flex" />
			<Box
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				display="inline-block"
			>
				<Text font="--headline2" color="--secondary" margin="0px 0px 20px 0px" lg-font="normal 500 32px/1.3 &quot;Marcellus&quot;, serif">
					Kind counsel find yourself{" "}
				</Text>
				<Text
					lg-margin="0px 0px 40px 0px"
					font="--lead"
					color="--darkL2"
					margin="0px 0px 80px 0px"
					width="50%"
					lg-width="65%"
					sm-width="100%"
					display="block"
				>
					In the realm of digital therapy, the firm has made remarkable strides. Their interactive platform, 'Kind Counsel', uses AI to mimic human interaction, providing an avenue for people to openly express their thoughts and emotions in a non-judgmental space. It's designed to provide immediate assistance while also connecting users to professional mental health services if necessary.
				</Text>
				<Image
					src="https://images.unsplash.com/photo-1687979508407-0a0a5036b394?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
					display="inline-block"
					width="100%"
					height="1211px"
					position="static"
					flex-direction="row"
					align-content="stretch"
				/>
			</Box>
		</Section>
		<Section padding="80px 0 100px 0">
			<Box display="flex" flex-direction="column" align-items="center" justify-content="center">
				<Text
					sm-text-align="center"
					sm-font="normal 500 28px/1.3 &quot;Marcellus&quot;, serif"
					md-font="normal 500 28px/1.3 &quot;Marcellus&quot;, serif"
					margin="0px 0px 20px 0px"
					font="--headline2"
					color="--coralD1"
				>
					Work with us?
				</Text>
				<Text
					margin="0px 0px 50px 0px"
					font="--lead"
					color="--darkL2"
					max-width="600px"
					lg-max-width="500px"
					md-font="normal 400 16px/1.5 &quot;Marcellus&quot;, serif"
				>
					We'll support you from the minute you contact us and at every moment on your working day. Need advice or just want to share your ideas? We are here for you!
				</Text>
				<Box border-radius="100%" background="inherit" position="relative">
					<Box
						height="100%"
						width="100%"
						position="absolute"
						border-radius="100%"
						border-width="1px"
						border-style="solid"
						border-color="--color-coralD1"
						transform="matrix(0.99, -0.22, 0.11, 0.98, 0, 0)"
					/>
					<Box
						transform="matrix(1, -0.2, 0.1, 0.98, 0, 0)"
						height="100%"
						width="100%"
						position="absolute"
						border-radius="100%"
						border-width="1px"
						border-style="solid"
						border-color="--color-coralD1"
					/>
					<Box
						width="100%"
						position="absolute"
						border-radius="100%"
						border-width="1px"
						border-style="solid"
						border-color="--color-coralD1"
						transform="matrix(1, -0.17, 0.08, 0.99, 0, 0)"
						height="100%"
					/>
					<Components.QuarklycommunityKitPopup border-radius="100%">
						<Override
							slot="Button Open"
							hover-opacity=".8"
							transform="matrix(0.99, -0.22, 0.11, 0.98, 0, 0)"
							color="--pageBg"
							padding="30px 64px 30px 64px"
							font="--headline3"
							hover-border-radius="100%"
							border-radius="100%"
							background="rgba(0, 119, 204, 0)"
						>
							<Text transform="matrix(1.1, 0.22, -0.14, 1, 0, 0)" margin="0px 0px 0px 0px" color="--coralD1">
								Work with us!
							</Text>
							{" "}
						</Override>
						<Override
							slot="Wrapper"
							max-height="95vh"
							overflow-y="auto"
							max-width="600px"
							background="--color-pageBg"
							md-overflow-y="visible"
						/>
						<Override slot="Button Close" size="40px" color="--coral" />
						<Box flex-direction="column" padding="0px 16px 36px 16px" display="flex">
							<Box padding="0px 16px 16px 16px">
								<Text margin="0px 0px 16px 0px" font="--headline2" color="--secondary">
									Let's plan your wedding or holiday?
								</Text>
								<Text color="--darkL2" margin="0px 0px 40px 0px" font="--lead">
									Have a question about your future journey? Wondering about one of our destinations? Ask away! That’s what we’re here for.
								</Text>
								<Text margin="0px 0px 0px 0px" font="--headline3" color="--secondary">
									Request details
								</Text>
							</Box>
							<Components.QuarklycommunityKitNetlifyForm
								successMessage="Thanks for you reply"
								color="--secondary"
								display="flex"
								flex-wrap="wrap"
								width="100%"
							>
								<Override slot="Form" width="100%" />
								<Box sm-width="100%" display="flex" flex-wrap="wrap" sm-flex-direction="column">
									<Box
										sm-width="100%"
										width="50%"
										display="flex"
										padding="16px 16px 16px 16px"
										flex-direction="column"
									>
										<Text margin="0px 0px 8px 0px" font="600 24px/1.3 --fontFamily-googleManrope" color="--secondary">
											First name
										</Text>
										<Input
											name="Name"
											border-radius="0px"
											required
											sm-width="100%"
											padding="14px 16px 14px 16px"
											placeholder="Bill"
											type="text"
											border-color="--color-light"
											border-width="1px"
										/>
									</Box>
									<Box
										width="50%"
										display="flex"
										padding="16px 16px 16px 16px"
										flex-direction="column"
										sm-width="100%"
									>
										<Text font="600 24px/1.3 --fontFamily-googleManrope" color="--secondary" margin="0px 0px 8px 0px">
											Last name (optional)
										</Text>
										<Input
											sm-width="100%"
											padding="14px 16px 14px 16px"
											placeholder="Salliwan"
											type="text"
											border-color="--color-light"
											border-width="1px"
											border-radius="0px"
											name="Last name"
										/>
									</Box>
									<Box
										padding="16px 16px 16px 16px"
										flex-direction="column"
										sm-width="100%"
										width="50%"
										display="flex"
									>
										<Text color="--secondary" margin="0px 0px 8px 0px" font="600 24px/1.3 --fontFamily-googleManrope">
											Email address
										</Text>
										<Input
											type="email"
											required
											padding="14px 16px 14px 16px"
											placeholder="billslwn@mailbox.com"
											name="mail"
											border-color="--color-light"
											border-width="1px"
											border-radius="0px"
											sm-width="100%"
										/>
									</Box>
									<Box
										width="50%"
										display="flex"
										padding="16px 16px 16px 16px"
										flex-direction="column"
										sm-width="100%"
									>
										<Text margin="0px 0px 8px 0px" font="600 24px/1.3 --fontFamily-googleManrope" color="--secondary">
											Phone number (optional)
										</Text>
										<Input
											placeholder="1 916 555-17-29"
											name="tel"
											type="tel"
											border-color="--color-light"
											border-width="1px"
											border-radius="0px"
											sm-width="100%"
											padding="14px 16px 14px 16px"
										/>
									</Box>
									<Box width="100%" display="flex" flex-direction="column" padding="16px 16px 16px 16px">
										<Text margin="0px 0px 8px 0px" font="600 24px/1.3 --fontFamily-googleManrope">
											Tell us more about you idea
										</Text>
										<Input
											padding="14px 16px 14px 16px"
											placeholder="Enter your message here..."
											name="text"
											type="text"
											border-color="--color-light"
											width="100%"
											border-width="1px"
											border-radius="0px"
											as="textarea"
											min-height="150px"
											sm-width="100%"
										/>
										<Text margin="8px 0px 32px 0px" font="--base" color="--coral">
											5000 characters left
										</Text>
										<Box justify-content="center" display="flex" align-items="center">
											<Button
												hover-opacity=".8"
												align-items="center"
												justify-content="center"
												color="--pageBg"
												text-transform="uppercase"
												padding="12px 68px 12px 68px"
												font="--lead"
												background="--color-secondary"
												border-radius="10px"
											>
												Submit
											</Button>
										</Box>
									</Box>
								</Box>
							</Components.QuarklycommunityKitNetlifyForm>
						</Box>
					</Components.QuarklycommunityKitPopup>
				</Box>
			</Box>
		</Section>
		<Section padding="160px 0 99px 0" md-padding="40px 0 50px 0" background="--color-sectionBg">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				padding="0px 32px 0px 0px"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="25%"
			>
				<Text font="400 28px/1.5 --fontFamily-googleMarcellus" color="--secondary" margin="0px 0px 8px 0px">
					Kind Gestures EU
				</Text>
				<Text color="--darkL2" md-margin="0px 0px 30px 0px" margin="0px 0px 0px 0px" font="--base">
					Kind Gestures Tech is a forward-thinking technology firm that dedicates its resources to the development of digital tools for mental wellbeing and health.{" "}
				</Text>
			</Box>
			<Box
				padding="0px 0px 0px 16px"
				md-margin="20px 0px 0px 0px"
				md-width="33.333%"
				empty-min-height="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				flex-direction="column"
				md-padding="0px 0px 0px 0px"
				empty-min-width="64px"
				empty-border-width="1px"
				width="25%"
				display="flex"
			>
				<Text margin="0px 0px 8px 0px" font="--headline3" color="--secondary">
					Media
				</Text>
				<Link
					transition="opacity 0.3s ease-in-out 0s"
					hover-text-decoration-line="initial"
					hover-opacity=".8"
					color="--coral"
					font="--lead"
					text-decoration-line="initial"
					href="#"
					margin="0px 0px 8px 0px"
				>
					News
				</Link>
				<Link
					hover-text-decoration-line="initial"
					hover-opacity=".8"
					color="--coral"
					font="--lead"
					text-decoration-line="initial"
					href="#"
					margin="0px 0px 8px 0px"
					transition="opacity 0.3s ease-in-out 0s"
				>
					PR contacts
				</Link>
			</Box>
			<Box
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				width="25%"
				display="flex"
				md-margin="20px 0px 0px 0px"
				md-width="33.333%"
				empty-min-height="64px"
				empty-border-style="solid"
				flex-direction="column"
			>
				<Text margin="0px 0px 8px 0px" font="--headline3" color="--secondary">
					About
				</Text>
				<Link
					hover-opacity=".8"
					color="--coral"
					font="--lead"
					text-decoration-line="initial"
					href="#"
					margin="0px 0px 8px 0px"
					transition="opacity 0.3s ease-in-out 0s"
					hover-text-decoration-line="initial"
				>
					Application
				</Link>
				<Link
					margin="0px 0px 8px 0px"
					transition="opacity 0.3s ease-in-out 0s"
					hover-text-decoration-line="initial"
					hover-opacity=".8"
					color="--coral"
					font="--lead"
					text-decoration-line="initial"
					href="#"
				>
					Take a Test
				</Link>
				<Link
					margin="0px 0px 8px 0px"
					transition="opacity 0.3s ease-in-out 0s"
					hover-text-decoration-line="initial"
					hover-opacity=".8"
					color="--coral"
					font="--lead"
					text-decoration-line="initial"
					href="#"
				>
					Our Philosophy{" "}
				</Link>
				<Link
					color="--coral"
					font="--lead"
					text-decoration-line="initial"
					href="#"
					margin="0px 0px 8px 0px"
					transition="opacity 0.3s ease-in-out 0s"
					hover-text-decoration-line="initial"
					hover-opacity=".8"
				>
					Work with us !
				</Link>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="25%"
				md-margin="20px 0px 0px 0px"
				empty-min-width="64px"
				display="flex"
				flex-direction="column"
				md-width="33.333%"
			>
				<Text font="--headline3" color="--secondary" margin="0px 0px 8px 0px">
					Follow us
				</Text>
				<Link
					font="--lead"
					text-decoration-line="initial"
					href="#"
					margin="0px 0px 8px 0px"
					transition="opacity 0.3s ease-in-out 0s"
					hover-text-decoration-line="initial"
					hover-opacity=".8"
					color="--coral"
				>
					Facebook
				</Link>
				<Link
					hover-text-decoration-line="initial"
					hover-opacity=".8"
					color="--coral"
					font="--lead"
					text-decoration-line="initial"
					href="#"
					margin="0px 0px 8px 0px"
					transition="opacity 0.3s ease-in-out 0s"
				>
					Instagram
				</Link>
				<Link
					href="#"
					margin="0px 0px 8px 0px"
					transition="opacity 0.3s ease-in-out 0s"
					hover-text-decoration-line="initial"
					hover-opacity=".8"
					color="--coral"
					font="--lead"
					text-decoration-line="initial"
				>
					Pinterest
				</Link>
				<Link
					hover-opacity=".8"
					color="--coral"
					font="--lead"
					text-decoration-line="initial"
					href="#"
					margin="0px 0px 8px 0px"
					transition="opacity 0.3s ease-in-out 0s"
					hover-text-decoration-line="initial"
				>
					Dribbble
				</Link>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"615c316435c5c8001f775566"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n    scroll-behavior: smooth;\n}\n"}
			</style>
		</RawHtml>
	</Theme>;
});