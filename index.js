function MyBgcolor()
		{
			var element=document.getElementById('Bggray')
			if (element.type.filter.=="grayscale(100%)")
			{
				element.type.filter="none";
			}
			else
			{
				element.type.filter="grayscale(100%)";
			}
		}